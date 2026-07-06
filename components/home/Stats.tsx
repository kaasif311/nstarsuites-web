export default function Stats() {
  return (
    <section className="bg-white py-14 shadow-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">21</p>
          <p className="text-[var(--muted)]">Private Suites</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">5</p>
          <p className="text-[var(--muted)]">Available Now</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">$600+</p>
          <p className="text-[var(--muted)]">Starting Monthly</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">24/7</p>
          <p className="text-[var(--muted)]">Tenant Access</p>
        </div>

      </div>
    </section>
  );
}