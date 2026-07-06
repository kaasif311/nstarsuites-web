import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/exterior/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-40">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-200">
            Houston Office Suites
          </p>

          <h1 className="max-w-4xl font-[family-name:var(--font-poppins)] text-5xl font-bold leading-tight lg:text-7xl">
            Premium Office Suites for Growing Businesses
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-slate-100">
            Flexible private office suites with utilities included,
            high-speed internet, conference room access, and 24/7 secure
            entry.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0B5D4D] shadow-lg transition hover:scale-105"
            >
              Schedule a Tour
            </a>

            <a
              href="#available"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#0B5D4D]"
            >
              View Available Suites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}