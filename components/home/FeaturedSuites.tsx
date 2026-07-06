import { suites } from "@/data/suites";

export default function FeaturedSuites() {
  return (
    <section
      id="available"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#0B5D4D]">
            Available Now
          </p>

          <h2 className="text-5xl font-bold">
            Featured Office Suites
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Modern private offices with flexible lease terms,
            utilities included and 24/7 access.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {suites.map((suite) => (

            <article
              key={suite.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-64 bg-slate-200">

                <img
                  src={suite.image}
                  alt={suite.number}
                  className="h-full w-full object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                  Available
                </span>

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {suite.number}
                </h3>

                <p className="mt-4 text-slate-500">
                  {suite.description}
                </p>

                <div className="mt-8 flex justify-between">

                  <div>

                    <p className="text-sm uppercase text-slate-400">
                      Size
                    </p>

                    <p className="font-semibold">
                      {suite.size} SF
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm uppercase text-slate-400">
                      Starting
                    </p>

                    <p className="text-2xl font-bold text-[#0B5D4D]">
                      ${suite.monthlyRent}
                    </p>

                  </div>

                </div>

                <button
                  className="mt-8 w-full rounded-xl bg-[#0B5D4D] py-4 font-semibold text-white transition hover:bg-[#08493d]"
                >
                  Schedule Tour
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}