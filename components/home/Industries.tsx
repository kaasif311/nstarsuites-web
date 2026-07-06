const industries = [
  "Medical Professionals",
  "Attorneys",
  "CPAs & Tax Professionals",
  "Insurance Agencies",
  "Real Estate Professionals",
  "Therapists & Counselors",
  "Consultants",
  "Startups & Entrepreneurs",
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-[#0B5D4D] p-10 text-white lg:p-16">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Industries We Serve
          </p>

          <h2 className="max-w-3xl text-4xl font-bold lg:text-5xl">
            Flexible office space for professionals and growing businesses.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl bg-white/10 p-5 backdrop-blur"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}