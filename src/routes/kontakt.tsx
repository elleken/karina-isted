import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt. Karina Isted" },
      {
        name: "description",
        content:
          "Online booking, telefon og mail. Praksis i Solrød Strand.",
      },
      { property: "og:title", content: "Kontakt. Karina Isted" },
      {
        property: "og:description",
        content: "Sådan kontakter du mig. Online booking, telefon og mail.",
      },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
          Kontakt
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight mb-8 text-balance">
          Tag fat i mig
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed mb-12 text-pretty">
          Du er meget velkommen til at kontakte mig, hvis du overvejer et forløb
          eller har spørgsmål. Vi finder sammen ud af, om jeg er den rette for jer.
        </p>

        <div className="space-y-6">
          <div className="bg-white ring-1 ring-black/5 rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">
              Online booking
            </p>
            <h2 className="font-serif text-2xl text-zinc-900 mb-4">
              Book en tid direkte
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Du kan booke online via min behandlerportal.
            </p>
            <iframe
              src="https://system.easypractice.net/book/psykolog-karina-isted"
              title="Book en tid hos psykolog Karina Isted"
              className="w-full h-[700px] rounded-xl border border-black/5"
              loading="lazy"
            />
          </div>

          <div className="bg-white ring-1 ring-black/5 rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">
              Telefon
            </p>
            <h2 className="font-serif text-2xl text-zinc-900 mb-3">Ring eller læg en besked</h2>
            <p className="text-zinc-600 leading-relaxed">
              Jeg kan være svær at fange på telefonen, da jeg ofte er i samtale.
              Læg en besked, så kontakter jeg dig inden for 24 timer på hverdage.
            </p>
          </div>

          <div className="bg-white ring-1 ring-black/5 rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">Mail</p>
            <h2 className="font-serif text-2xl text-zinc-900 mb-3">
              <a
                href="mailto:karinaisted@proton.me"
                className="hover:text-sage transition-colors"
              >
                karinaisted@proton.me
              </a>
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Jeg anbefaler, at du ikke deler personfølsomme oplysninger i mailen,
              da den ikke er krypteret. Når jeg svarer, sker det fra sikker og
              krypteret mail, og herefter lever vores korrespondance op til
              sikkerhedskravene jf. GDPR.
            </p>
          </div>

          <div className="bg-sand-muted ring-1 ring-black/5 rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">
              Adresse
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Solrød Strand
              <br />
              2680 Solrød Strand
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}