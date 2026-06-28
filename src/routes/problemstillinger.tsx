import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/problemstillinger")({
  head: () => ({
    meta: [
      { title: "Problemstillinger. Karina Isted" },
      {
        name: "description",
        content:
          "Skolevægring, angst, ADHD og autisme, højt konfliktniveau, lavt selvværd og forældrerådgivning.",
      },
      { property: "og:title", content: "Problemstillinger. Karina Isted" },
      {
        property: "og:description",
        content: "Eksempler på problemstillinger, jeg kan hjælpe børn, unge og familier med.",
      },
      { property: "og:url", content: "/problemstillinger" },
    ],
    links: [{ rel: "canonical", href: "/problemstillinger" }],
  }),
  component: IssuesPage,
});

const topics = [
  {
    title: "Skolevægring",
    body: "Skoleværing eller ufrivilligt skolefravær er begreber der dækker over et ufrivilligt, vedvarende fravær fra skole. Barnet med skoleværing oplever så stort et ubehag ved at være i skole, at det har behov for at beskytte sig ved at blive hjemme. Når barnet skal hjælpes tilbage i skole er det centralt at få belyst, hvilke faktorer der ligger bag udviklingen af skoleværing, samt hvilke faktorer der vedligeholder skolefraværet. Jeg vil i samarbejde med jer forældre være undersøgende på årsagerne bag skoleværingen, og med baggrund heri lægge en plan for, hvordan barnet kan komme i trivsel og tilbage i skole.",
  },
  {
    title: "Angst og bekymringer",
    body: "Angst er en naturlig følelse hos alle mennesker, der gør os opmærksom på, at der kan være fare på færde. Følelsen af angst kan blive så omfattende, at det hæmmer barnets trivsel og sociale udvikling, hvor barnet undgår bestemte situationer. I samtalerne vil jeg være undersøgende på, hvilken funktion angsten har for barnet, samt støtte barnet i at udtrykke og forstå sine følelser. Der vil typisk i forløbet indgå elementer fra kognitiv adfærdsterapi, ligesom I som forældre er en vigtig del af behandlingen.",
  },
  {
    title: "ADHD og autisme",
    body: "Når barnet er udredt med en udviklingsforstyrrelse, er det belyst, at barnet har behov for noget særligt fra sine omgivelser. Jeg støtter i processen omkring at forstå barnets behov og er sammen med jer undersøgende på, hvilke pædagogiske tilgange der kan fremme trivsel.",
  },
  {
    title: "Højt konfliktniveau",
    body: "Hyppige og voldsomme konflikter og kravafvisende adfærd kan slide hele familien op. Vi arbejder med at forstå, hvad der ligger bag konflikterne, og hvordan I som forældre kan møde barnet på nye måder.",
  },
  {
    title: "Lavt selvværd",
    body: "Når barnet taler grimt om sig selv, trækker sig fra fællesskaber eller virker tynget af følelsen af ikke at slå til. Vi arbejder med at styrke barnets oplevelse af at være værdifuld og afholdt, også når noget er svært.",
  },
  {
    title: "Forældrerådgivning",
    body: "Nogle gange er det jer som forældre, der har størst behov for et rum at tænke i. Forløb kan tilrettelægges som ren forældrerådgivning, hvor vi sammen finder vej i de udfordringer, I står med.",
  },
];

function IssuesPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-screen-md mx-auto mb-16">
        <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
          Problemstillinger
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight mb-8 text-balance">
          Hvad jeg kan hjælpe med
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed text-pretty">
          Børn og unge kan på mange måder vise omverdenen, at de ikke trives og har
          behov for støtte. Nedenfor er eksempler på problemstillinger, jeg arbejder
          med. Listen er ikke udtømmende, så tøv ikke med at skrive, hvis I er i
          tvivl.
        </p>
      </div>

      <div className="max-w-screen-md mx-auto divide-y divide-zinc-950/5 border-y border-zinc-950/5">
        {topics.map((t) => (
          <section key={t.title} className="py-10">
            <h2 className="font-serif text-2xl text-zinc-900 mb-3">{t.title}</h2>
            <p className="text-zinc-600 leading-relaxed text-pretty">{t.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}