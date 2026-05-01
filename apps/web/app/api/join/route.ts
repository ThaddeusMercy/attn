import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const joinFormEndpoint =
  "https://jff-api.young-queen-5ffa.workers.dev/f/11686a11-a8b7-4ee6-92ec-894870d5dc62";

export async function POST(request: Request) {
  const { email, website } = await request.json();

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    return NextResponse.json({ error: "drop a real email" }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const response = await fetch(joinFormEndpoint, {
    body: JSON.stringify({
      email: normalizedEmail,
      source: "attentionfactory.io",
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (response.ok) {
    return NextResponse.json({ ok: true });
  }

  // Previous Resend Audience flow, kept here for quick rollback.
  // const apiKey = process.env.RESEND_API_KEY;
  // const audienceId = process.env.RESEND_AUDIENCE_ID;
  //
  // if (!apiKey || !audienceId) {
  //   return NextResponse.json({ error: "signup is not configured yet" }, { status: 500 });
  // }
  //
  // const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
  //   body: JSON.stringify({
  //     email: normalizedEmail,
  //     unsubscribed: false,
  //   }),
  //   headers: {
  //     Authorization: `Bearer ${apiKey}`,
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  // });
  //
  // if (response.ok || response.status === 409) {
  //   return NextResponse.json({ ok: true });
  // }

  return NextResponse.json({ error: "could not save email" }, { status: 502 });
}
