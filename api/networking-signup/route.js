import { NextResponse } from "next/server";
import { submitNetworkingSignup } from "../../../lib/airtable";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, club, role, whatsapp, message, website } = data;

  // Honeypot field — if filled, silently accept without writing to Airtable.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !whatsapp) {
    return NextResponse.json(
      { error: "Please fill in your name, email and WhatsApp number." },
      { status: 400 }
    );
  }

  try {
    await submitNetworkingSignup({
      Name: name,
      Email: email,
      "Club / Organisation": club || "",
      Role: role || "",
      "WhatsApp Number": whatsapp,
      Message: message || "",
      "Submitted At": new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong submitting your details. Please email us directly at contact@wowfootball.group." },
      { status: 500 }
    );
  }
}
