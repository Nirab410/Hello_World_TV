import { getStore, connectLambda } from "@netlify/blobs";

let localStats = {
  total: 0,
  today: 0,
  todayKey: "",
};

function getDhakaDateKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

async function getStatsFromStore(event) {
  try {
    connectLambda(event); // Important for Netlify Functions Lambda mode

    const store = getStore("hello-world-tv-counter");
    const saved = await store.get("stats", { type: "json" });

    return {
      type: "blob",
      store,
      data: saved || null,
    };
  } catch (err) {
    console.error("Netlify Blobs failed:", err.message);

    if (process.env.NETLIFY === "true") {
      throw err; // Production এ local fallback না
    }

    return {
      type: "local",
      store: null,
      data: localStats,
    };
  }
}

export const handler = async (event) => {
  try {
    const params = new URLSearchParams(event.rawQuery || "");
    const shouldCount = params.get("count") === "1";
    const todayKey = getDhakaDateKey();

    const result = await getStatsFromStore(event);

    let data = result.data || {
      total: 0,
      today: 0,
      todayKey,
    };

    if (data.todayKey !== todayKey) {
      data.today = 0;
      data.todayKey = todayKey;
    }

    if (shouldCount) {
      data.total += 1;
      data.today += 1;

      if (result.type === "blob") {
        await result.store.setJSON("stats", data);
      } else {
        localStats = data;
      }
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({
        total: data.total,
        today: data.today,
        date: data.todayKey,
        mode: result.type,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Counter failed",
        details: err.message,
      }),
    };
  }
};
