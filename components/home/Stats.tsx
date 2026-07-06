export default function Stats() {
  return (
    <section className="bg-white py-14 shadow-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">21</p>
          <p className="text-slate-500">Private Suites</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">5</p>
          <p className="text-slate-500">Available Now</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">$600+</p>
          <p className="text-slate-500">Starting Monthly</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#0B5D4D]">24/7</p>
          <p className="text-slate-500">Tenant Access</p>
        </div>

      </div>
    </section>
  );
}