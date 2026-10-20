import { z } from "zod";

const supabaseEnvSchema = z.object({
  url: z.string().url("NEXT_PUBLIC_SUPABASE_URL harus berupa URL yang valid"),
  anonKey: z.string().min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY belum diisi"),
});

/**
 * Membaca konfigurasi Supabase dan memberi pesan error yang jelas
 * jika environment variable belum diisi.
 * Catatan: variabel NEXT_PUBLIC_* harus ditulis lengkap seperti di bawah
 * agar bisa dibaca oleh browser.
 */
export function getSupabaseEnv() {
  const parsed = supabaseEnvSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });

  if (!parsed.success) {
    const detail = parsed.error.issues.map((i) => i.message).join("; ");
    throw new Error(
      `Konfigurasi Supabase belum lengkap: ${detail}. Lihat file .env.example.`
    );
  }

  return parsed.data;
}
