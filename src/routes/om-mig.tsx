import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/karina-portrait.jpg.asset.json";

export const Route = createFileRoute("/om-mig")({
  head: () => ({
    meta: [
      { title: "Om mig — Karina Isted" },
      {
        name: "description",
        content:
          "Autoriseret klinisk psykolog, uddannet fra SDU, med baggrund som pædagog og specialiseret i legeterapi.",
      },
      { property: "og:title", content: "Om mig — Karina Isted" },
      {
        property: "og:description",
        content:
          "Autoriseret klinisk psykolog med baggrund i pædagogik og legeterapi.",
      },
      { property: "og:url", content: "/om-mig" },
    ],
    links: [{ rel: "canonical", href: "/om-mig" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
          Om mig
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight mb-10 text-balance">
          Klinisk psykolog med rødder i pædagogikken
        </h1>
        <div className="mb-12 overflow-hidden rounded-2xl ring-1 ring-black/5 bg-sand-muted">
          <img
            src={portrait.url}
            alt="Portræt af Karina Isted, autoriseret klinisk psykolog"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
        <div className="prose-content space-y-6 text-zinc-700 text-lg leading-relaxed">
          <p>
            Jeg er uddannet psykolog fra Syddansk Universitet i 2021, autoriseret af
            Styrelsen for Patientsikkerhed og har gennemført praksisuddannelse for
            psykologer (klinisk psykolog). Jeg har desuden en 1-årig uddannelse i
            legeterapi ved Institut for Legeterapi ved Jytte Mielcke. I 2013 blev
            jeg uddannet pædagog og har pædagogisk erfaring fra arbejde på både
            almen- og specialområdet.
          </p>
          <p>
            Jeg arbejder i dag som selvstændig psykolog. Tidligere har jeg arbejdet
            i kommunalt regi i Pædagogisk Psykologisk Rådgivning (PPR), hvor jeg
            bl.a. har lavet pædagogisk psykologiske vurderinger og arbejdet
            understøttende med børn og unges trivsel og udvikling gennem
            vejledning og rådgivning. Senest har jeg arbejdet med samtale og
            traumeudredning af børn og unge udsat for vold og overgreb.
          </p>
          <p>
            Jeg er medlem af Dansk Psykologforening, modtager ekstern supervision
            og deltager løbende i relevante kurser for at dygtiggøre mig.
          </p>
          <p>
            Privat bor jeg sammen med min mand og to børn født i henholdsvis 2018
            og 2021. Jeg holder særligt af at gå ture ved stranden og bruge tid i
            haven og køkkenet.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { k: "Autoriseret", v: "Styrelsen for Patientsikkerhed" },
            { k: "Uddannet", v: "Cand.psych., SDU 2021" },
            { k: "Specialisering", v: "Legeterapi" },
          ].map((c) => (
            <div key={c.k} className="bg-sand-muted rounded-xl p-6">
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                {c.k}
              </p>
              <p className="text-sm font-medium text-zinc-800">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}