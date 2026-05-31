export async function onRequestGet(context) {
  const { env, request } = context;

  if (!env.VISITOR_COUNTER) {
    return new Response(JSON.stringify({ error: "KV binding missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const url = new URL(request.url);
  const shouldCount = url.searchParams.get("count") === "1";

  const todayDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const totalKey = "total_views";
  const todayKey = `views_${todayDate}`;

  let total = Number(await env.VISITOR_COUNTER.get(totalKey)) || 0;
  let today = Number(await env.VISITOR_COUNTER.get(todayKey)) || 0;

  if (shouldCount) {
    total += 1;
    today += 1;

    await env.VISITOR_COUNTER.put(totalKey, String(total));
    await env.VISITOR_COUNTER.put(todayKey, String(today));
  }

  return new Response(JSON.stringify({ total, today, date: todayDate }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
