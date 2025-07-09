// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, // or use your URL directly
  import.meta.env.VITE_SUPABASE_ANON_KEY // keep this safe
);
