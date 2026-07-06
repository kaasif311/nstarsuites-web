const amenities = [
  "Utilities Included",
  "24/7 Tenant Access",
  "High-Speed Internet",
  "Conference Room",
  "Professional Business Address",
  "Ample Parking",
  "Mail Service",
  "Secure Building",
];

export default function Amenities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#0B5D4D]">
          Amenities
        </p>

        <h2 className="max-w-3xl text-4xl font-bold lg:text-5xl">
          Everything your business needs in one professional location.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-[#0B5D4D]" />
              <h3 className="font-semibold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}