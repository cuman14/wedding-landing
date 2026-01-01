export async function GET() {
  const eventDetails = {
    title: "Boda Oswald y Marina",
    start: "20261010T163000",
    end: "20261011T003000",
    location: "Finca Condado de Cubillana, Toledo",
    description: "¡Nuestro gran día! No faltéis.",
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "PRODID:-//Oswald Marina//Wedding//ES",
    "BEGIN:VEVENT",
    `SUMMARY:${eventDetails.title}`,
    `DTSTART:${eventDetails.start}`,
    `DTEND:${eventDetails.end}`,
    `LOCATION:${eventDetails.location}`,
    `DESCRIPTION:${eventDetails.description}`,
    "BEGIN:VALARM",
    "TRIGGER:-P30D",
    "ACTION:DISPLAY",
    "DESCRIPTION:Recordatorio Boda Oswald y Marina",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(icsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="boda-oswald-marina.ics"',
    },
  });
}
