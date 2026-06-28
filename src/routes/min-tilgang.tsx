import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/min-tilgang")({
  head: () => ({
    meta: [
      { title: "Min tilgang. Karina Isted" },
      {
        name: "description",
        content:
          "Jeg arbejder med tilknytningsteori, psykodynamisk og systemisk tilgang. Forældre er den vigtigste samarbejdspartner.",
      },
      { property: "og:title", content: "Min tilgang. Karina Isted" },
      {
        property: "og:description",
        content: "Sådan arbejder jeg med børn, unge og familier.",
      },
      { property: "og:url", content: "/min-tilgang" },
    ],
    links: [{ rel: "canonical", href: "/min-tilgang" }],
  }),
  component: ApproachPage,
});

const principles = [
  {
    title: "Børn gør det bedste, de kan",
    body: "Der er en ulighed i relationen mellem barn og voksen. Når barnet ikke trives, skal forandringen først og fremmest komme fra os voksne.",
  },
  {
    title: "Forældre er den vigtigste samarbejdspartner",
    body: "I kender jeres barn bedst. Jeres viden om barnet og deltagelse i forløbet er derfor afgørende for mulighed for forandring.",
  },
  {
    title: "Hele familien påvirkes",
    body: "Mistrivsel rammer ikke kun barnet. Skyld, skam og sorg fylder ofte hos forældrene, det er en del af arbejdet at give plads til.",
  },
  {
    title: "Tryghed i rummet",
    body: "Jeg lægger stor vægt på at skabe et trygt rum for både barn og voksne, så vi tør tale om det svære.",
  },
];

function ApproachPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
          Min tilgang
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight mb-10 text-balance">
          Forståelse først – Forandring derfra
        </h1>
        <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
          <p>
            I mit arbejde er jeg særligt optaget af at forstå, hvad der er bagvedliggende for barnets adfærd, hvilke følelser og behov forsøger barnet at kommunikere. Jeg arbejder ud fra en forståelse af, at det vi kommer fra og det vi har med os, er betydningsfuldt for vores aktuelle situation. Viden om erfaringer, relationer og opvækstvilkår er derfor vigtig for at forstå, hvorfor barnet reagerer, som det gør. Når der skabes forståelse, dannes der grundlag for at arbejde med, hvordan barnet kan mødes på nye måder og støttes i retning af trivsel og udvikling.
          </p>
          <p>
            Min tilgang er, at der kan arbejdes med barnets lidelse og mestring i terapien, samtidig med at tiltag i barnets omgivelser er afgørende for en positiv forandring. Jeg er således optaget af, hvordan der i barnets omgivelser skabes de bedste betingelser for, at barnet med sine forudsætninger kan trives og udvikles.
          </p>
          <p>
            Jeg anvender forskellige teoretiske tilgange afhængigt af problemstillingen, i mit arbejde med børn og unge trækker jeg særligt på den psykodynamiske terapi, tilknytningsteorien, systemisk tænkning samt elementer fra kognitiv terapi.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-sand-muted rounded-xl p-8 ring-1 ring-black/5"
            >
              <h3 className="font-serif text-xl text-zinc-900 mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-950/5 pt-12">
          <h2 className="font-serif text-2xl text-zinc-900 mb-6">
            Sådan starter et forløb
          </h2>
          <p className="text-zinc-700 text-lg leading-relaxed">
            Et forløb starter med en samtale med forældrene. Derfra vurderer vi
            sammen, hvordan barnet skal inddrages, og i hvilket omfang det er
            forældre eller barnet, der skal til samtale.
          </p>
        </div>
      </div>
    </article>
  );
}