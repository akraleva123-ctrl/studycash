import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const { plan } = await req.json();

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({
        error: "STRIPE_NOT_CONFIGURED",
        message: "Stripe не е настроен. Добави STRIPE_SECRET_KEY и Price IDs във Vercel Environment Variables."
      }, { status: 400 });
    }

    const priceId = plan === "premium"
      ? process.env.STRIPE_PRICE_PREMIUM
      : process.env.STRIPE_PRICE_EXAM_PACK;

    if (!priceId) {
      return NextResponse.json({
        error: "PRICE_ID_MISSING",
        message: "Липсва Stripe Price ID за този план."
      }, { status: 400 });
    }

    const stripe = new Stripe(stripeKey);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: plan === "premium" ? "subscription" : "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/studio?canceled=1`,
      metadata: { plan }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({
      error: "CHECKOUT_ERROR",
      message: "Не може да се създаде Stripe checkout."
    }, { status: 500 });
  }
}
