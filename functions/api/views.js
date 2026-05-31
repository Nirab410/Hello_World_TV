export async function onRequestGet(context) {
  const { env } = context;

  if (!env.VISITOR_COUNTER) {
    return new Response(JSON.stringify({ error: "KV binding missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const todayDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const totalKey = "total_views";
  const todayKey = `views_${todayDate}`;

  const currentTotal = Number(await env.VISITOR_COUNTER.get(totalKey)) || 0;

  const currentToday = Number(await env.VISITOR_COUNTER.get(todayKey)) || 0;

  const total = currentTotal + 1;
  const today = currentToday + 1;

  await env.VISITOR_COUNTER.put(totalKey, String(total));
  await env.VISITOR_COUNTER.put(todayKey, String(today));

  return new Response(
    JSON.stringify({
      total,
      today,
      date: todayDate,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    },
  );
}
