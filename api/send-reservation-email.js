const HOTEL_EMAIL = "hotelrexoficial@gmail.com";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label, value) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "-")}</p>`;
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return res.status(500).json({ error: "Email service is not configured" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const {
    nombre,
    telefono,
    tipo_habitacion,
    personas,
    ingreso,
    salida,
    modalidad,
  } = body;

  const receivedAt = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f1f1f; line-height: 1.5;">
      <h1 style="font-size: 22px;">Nueva consulta de reserva - Hotel Rex</h1>
      <p>Nueva consulta recibida desde la web de Hotel Rex.</p>
      ${row("Nombre", nombre)}
      ${row("Teléfono", telefono)}
      ${row("Tipo de habitación", tipo_habitacion)}
      ${row("Cantidad de personas", personas)}
      ${row("Fecha de ingreso", ingreso)}
      ${row("Fecha de salida", salida)}
      ${row("Modalidad", modalidad)}
      ${row("Estado", "pendiente")}
      ${row("Fecha y hora de recepción", receivedAt)}
    </div>
  `;

  const text = [
    "Nueva consulta recibida desde la web de Hotel Rex.",
    "",
    `Nombre: ${nombre || "-"}`,
    `Teléfono: ${telefono || "-"}`,
    `Tipo de habitación: ${tipo_habitacion || "-"}`,
    `Cantidad de personas: ${personas || "-"}`,
    `Fecha de ingreso: ${ingreso || "-"}`,
    `Fecha de salida: ${salida || "-"}`,
    `Modalidad: ${modalidad || "-"}`,
    "Estado: pendiente",
    `Fecha y hora de recepción: ${receivedAt}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hotel Rex <onboarding@resend.dev>",
        to: HOTEL_EMAIL,
        subject: "Nueva consulta de reserva - Hotel Rex",
        html,
        text,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend email failed:", details);
      return res.status(502).json({ error: "Email provider failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Reservation email error:", error);
    return res.status(500).json({ error: "Email send failed" });
  }
};
