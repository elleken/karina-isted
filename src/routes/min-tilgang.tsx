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
            I mit arbejde er jeg særligt optaget af at forstå, hvad der er bagvedliggende for barnets adfærd, samt hvilke følelser og behov barnet forsøger at kommunikere.
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
            Forløbet
          </h2>
          <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
            <p>
              Et samtaleforløb vil starte med en indledende samtale med jer forældre, hvor jeg er nysgerrig på jeres opfattelse af barnets generelle udvikling, udfordringer samt familiens livsomstændigheder. I et forløb vil jeg veksle mellem at have samtale med barnet, jer forældre og jer alle samlet, afhængigt at hvad der er meningsfuldt for problemstillingen og barnets behov.
            </p>
            <p>
              Tryghed for barnet i samtalen er afgørende, hvorfor forældre kan deltage, indtil barnet føler sig tryg ved at være alene med mig. Jeg arbejder ud fra den tilgang, at ændringer og udvikling hos barnet i høj grad er afhængig af omgivelsernes støtte og forståelse. Et primært fokus i mit arbejde er derfor at støtte jer forældre i nye indsigter og forståelser af jeres barn, således kontakten og støtten til jeres barn kan styrkes.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}