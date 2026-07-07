export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-8 text-5xl font-bold">Privacy Policy</h1>

      <div className="space-y-8 text-slate-700 leading-8">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Information We Collect</h2>
          <p>
            North Star Business Suites may collect your name, email address,
            phone number, company information, and any information you submit
            through our contact or tour request forms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">How We Use Information</h2>
          <p>
            We use your information to respond to inquiries, schedule property
            tours, provide leasing information, and improve our services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Information Sharing</h2>
          <p>
            We do not sell your personal information. Information is shared only
            with service providers necessary to operate our business or when
            required by law.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Cookies</h2>
          <p>
            This website may use cookies and analytics tools to improve your
            browsing experience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
          <p>
            Questions regarding this Privacy Policy may be sent to:
          </p>

          <p className="mt-3 font-semibold">
            hello@nstarsuites.com
          </p>
        </section>
      </div>
    </main>
  );
}