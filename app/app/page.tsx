import { CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { PIPELINE_STAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Logo />
        <h1 className="mt-10 text-3xl font-bold sm:text-4xl">
          WATT Sales Intelligence
        </h1>
        <p className="mt-2 text-lg text-teal-300">From Lead to Loyal Customer</p>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="h-5 w-5 text-teal-400" aria-hidden="true" />
            Fondasi proyek berhasil dijalankan
          </p>
          <p className="mt-2 text-sm text-navy-200">
            Ini halaman sementara (Tahap 1). Login, database, dan fitur CRM
            ditambahkan pada tahap berikutnya.
          </p>
          <p className="mt-5 text-sm font-medium">Tahapan pipeline:</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {PIPELINE_STAGES.map((stage) => (
              <li
                key={stage.key}
                className="rounded-full bg-teal-500/15 px-3 py-1 text-xs text-teal-200"
              >
                {stage.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
