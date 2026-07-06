import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#0B5D4D] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-40">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-200">
            Houston Office Suites
          </p>

          <h1 className="max-w-4xl font-[family-name:var(--font-poppins)] text-5xl font-bold leading-tight lg:text-7xl">
            Premium Office Suites for Growing Businesses
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-slate-100">
            Flexible private office suites with utilities included, high-speed
            internet, conference room access and 24/7 secure entry.
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

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold">21</p>
              <p className="text-slate-200">Private Suites</p>
            </div>

            <div>
              <p className="text-4xl font-bold">5</p>
              <p className="text-slate-200">Available Now</p>
            </div>

            <div>
              <p className="text-4xl font-bold">$600+</p>
              <p className="text-slate-200">Starting Monthly</p>
            </div>

            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-slate-200">Tenant Access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-4xl font-bold">
          Welcome to {SITE.name}
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Conveniently located at {SITE.address}, North Star Business Suites
          provides modern office space for entrepreneurs, medical professionals,
          attorneys, consultants, accountants, insurance agencies, therapists,
          and growing businesses.
        </p>
      </section>
    </main>
  );
}