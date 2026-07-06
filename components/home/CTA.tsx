import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#0B5D4D]">
          Schedule a Tour
        </p>

        <h2 className="text-4xl font-bold lg:text-5xl">
          Ready to find your next office?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Call or email North Star Business Suites to schedule a tour and check
          current availability.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${SITE.rawPhone}`}
            className="rounded-xl bg-[#0B5D4D] px-8 py-4 font-semibold text-white"
          >
            Call {SITE.phone}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}