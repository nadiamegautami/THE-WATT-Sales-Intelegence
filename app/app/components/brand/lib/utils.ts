/** Menggabungkan nama class CSS secara aman (mengabaikan nilai kosong). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Contoh: 1500000 -> "Rp 1.500.000" */
export function formatRupiah(value: number | null | undefined): string {
  const amount = typeof value === "number" && Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Contoh: "2026-10-20T08:00:00Z" -> "20 Okt 2026" */
export function formatTanggal(value: string | Date | null | undefined): string {
  if (!value) return "-";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

/** Persentase aman: tidak error jika pembagi 0. Hasil dalam bentuk 0-100. */
export function percentage(part: number, total: number): number {
  if (!total || total <= 0) return 0;
  return Math.round((part / total) * 1000) / 10;
}
