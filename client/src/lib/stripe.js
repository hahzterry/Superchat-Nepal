// client/src/lib/stripe.js
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export async function payWithStripe({ streamerUsername, amount, senderName, message }) {
  const res = await fetch(`${SERVER_URL}/api/create-checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ streamerUsername, amount, senderName, message }),
  });

  const data = await res.json();
  if (!res.ok || !data.url) throw new Error(data.error || "Stripe checkout failed");

  window.location.href = data.url;
}

export default payWithStripe;
