import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold">{SITE.name}</h3>

        <p className="mt-4 text-slate-300">
          {SITE.address}
        </p>

        <p className="text-slate-300">{SITE.phone}</p>

        <p className="text-slate-300">{SITE.email}</p>

        <p className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} North Star Business Suites.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}