import { NextResponse } from "next/server";
import { submitInvestorEnquiry } from "../../../lib/airtable";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, organisation, investmentRange, message, website } = data;

  // Honeypot field — if filled, silently accept without writing to Airtable.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }

  try {
    await submitInvestorEnquiry({
      Name: name,
      Email: email,
      Phone: phone || "",
      Organisation: organisation || "",
      "Investment Range": investmentRange || "",
      Message: message,
      "Submitted At": new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong submitting your enquiry. Please email us directly at contact@wowfootball.group." },
      { status: 500 }
    );
  }
}
