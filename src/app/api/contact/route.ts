import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/site-config";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const boat = formData.get("boat")?.toString().trim() ?? "";
    const boatSize = formData.get("boat_size")?.toString().trim() ?? "";
    const location = formData.get("location")?.toString().trim() ?? "";
    const service = formData.get("service")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const photos = formData
      .getAll("photos")
      .filter((p): p is File => p instanceof File && p.size > 0);

    const attachments = await Promise.all(
      photos.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      }))
    );

    const rows: [string, string][] = [
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["Boat", boat],
      ["Boat length", boatSize],
      ["Location", location],
      ["Service needed", service],
    ].filter(([, value]) => value.length > 0) as [string, string][];

    const html = `
      <h2>New quote request — ${escapeHtml(business.name)}</h2>
      ${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("\n")}
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      ${photos.length ? `<p><em>${photos.length} photo(s) attached.</em></p>` : ""}
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} Website <onboarding@resend.dev>`,
      to: business.email,
      replyTo: email,
      subject: `New quote request from ${name}`,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
