export function getSupabaseBrowser() {
  if (client) return client;

  // Prevent building on server; only run in browser
  if (typeof window === "undefined") {
    throw new Error(
      "getSupabaseBrowser() called during SSR. " +
      "Ensure this runs only in client components."
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase env vars");
  }

  client = createBrowserClient(url, key);
  return client;
}
