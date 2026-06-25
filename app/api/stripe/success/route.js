import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  if (!sessionId || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.redirect(`${appUrl}/studio?paid=missing`);
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const paidOk =
      session.payment_status === "paid" ||
      session.status === "complete" ||
      Boolean(session.subscription);

    const redirect = NextResponse.redirect(`${appUrl}/studio?paid=1`);

    if (paidOk) {
      redirect.cookies.set("studycash_paid", session.metadata?.plan || "paid", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30
      });
    }

    return redirect;
  } catch {
    return NextResponse.redirect(`${appUrl}/studio?paid=error`);
  }
}
