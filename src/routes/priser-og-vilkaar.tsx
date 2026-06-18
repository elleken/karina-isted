import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/priser-og-vilkaar")({
  head: () => ({
    meta: [
      { title: "Priser og vilkår. Karina Isted" },
      {
        name: "description",
        content:
          "Priser, afbudsregler, tilskud via Sygeforsikringen danmark og tavshedspligt.",
      },
      { property: "og:title", content: "Priser og vilkår. Karina Isted" },
      {
        property: "og:description",
        content: "Priser, afbud, tilskud og tavshedspligt.",
      },
      { property: "og:url", content: "/priser-og-vilkaar" },
    ],
    links: [{ rel: "canonical", href: "/priser-og-vilkaar" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
          Priser og vilkår
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight mb-12 text-balance">
          Priser og vilkår
        </h1>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-zinc-900 mb-6">Priser</h2>
          <div className="bg-sand-muted rounded-2xl ring-1 ring-black/5 divide-y divide-zinc-950/5">
            <div className="flex items-baseline justify-between p-6">
              <div>
                <p className="font-medium text-zinc-900">Samtale med barn eller ung</p>
                <p className="text-sm text-zinc-500 mt-1">45 minutter</p>
              </div>
              <p className="font-serif text-xl text-zinc-900">1.200 kr.</p>
            </div>
            <div className="flex items-baseline justify-between p-6">
              <div>
                <p className="font-medium text-zinc-900">Samtale med forældre</p>
                <p className="text-sm text-zinc-500 mt-1">60 minutter</p>
              </div>
              <p className="font-serif text-xl text-zinc-900">1.500 kr.</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4">
            Der faktureres pr. mail efter sessionen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-zinc-900 mb-4">Afbud</h2>
          <p className="text-zinc-700 leading-relaxed">
            Afbud meldes senest 24 timer før den aftalte tid begynder via
            telefonbesked, SMS eller mail. Ved senere afbud eller udeblivelse
            opkræves fuldt honorar, da tiden er reserveret til dig.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl text-zinc-900 mb-4">Tilskud</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              Du kan få tilskud, hvis du er medlem af Sygeforsikringen
              „danmark”. Jeg indberetter samtalerne, hvorefter du får tilskuddet
              udbetalt af „danmark”.
            </p>
            <p>
              Har du en sundhedsforsikring, privat eller via dit arbejde, vil
              du ofte kunne få tilskud til eller fuld dækning af
              psykologsamtaler. Du skal kontakte dit forsikringsselskab for at
              høre deres retningslinjer og afregningsprocedure, og sende dine
              fakturaer ind selv. Jeg sender fakturaerne til dig på mail.
            </p>
            <p className="text-zinc-500">
              Bemærk: Jeg modtager desværre ikke lægehenvisninger.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-zinc-900 mb-4">Tavshedspligt</h2>
          <p className="text-zinc-700 leading-relaxed">
            Som psykolog er jeg underlagt tavshedspligt. Alt, hvad du deler med
            mig, behandles fortroligt og med respekt for din integritet. Jeg har
            dog underretningspligt, hvis jeg bliver alvorligt bekymret for et
            barns trivsel og udvikling, eller hvis jeg vurderer, at en klient
            er til fare for sig selv eller andre.
          </p>
        </section>
      </div>
    </article>
  );
}