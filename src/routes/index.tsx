import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import clinicSkylight from "@/assets/clinic-skylight.jpg.asset.json";
import clinicChairs from "@/assets/clinic-chairs.jpg.asset.json";
import clinicTable from "@/assets/clinic-table.jpg.asset.json";
import karinaPortrait from "@/assets/karina-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karina Isted — Klinisk psykolog for børn og unge i Solrød Strand" },
      {
        name: "description",
        content:
          "Autoriseret klinisk psykolog. Samtaler til børn, unge og forældre i trygge, hyggelige rammer i Solrød Strand.",
      },
      { property: "og:title", content: "Karina Isted — Klinisk psykolog i Solrød Strand" },
      {
        property: "og:description",
        content: "Samtaler til børn, unge og forældre i trygge, hyggelige rammer i Solrød Strand.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const heroImages = [
  { src: karinaPortrait.url, alt: "Karina Isted i samtalerummet" },
  { src: clinicSkylight.url, alt: "Lyst samtalerum med ovenlysvinduer og rattanstole i Solrød Strand" },
  { src: clinicChairs.url, alt: "Hyggelig siddegruppe med rattanstole og blomster" },
  { src: clinicTable.url, alt: "Lyst arbejdsbord i klinikken med plads til samtaler og leg" },
];

const issues = [
  { title: "Angst og undgåelse", desc: "Når barnet trækker sig fra sociale sammenhænge eller hverdagsaktiviteter på grund af bekymring." },
  { title: "Skolevægring", desc: "Hvor modstanden mod at komme i skole bliver så stor, at det påvirker barnets trivsel og udvikling." },
  { title: "Lavt selvværd", desc: "Når barnet taler negativt om sig selv eller føler sig utilstrækkelig i hverdagens krav." },
  { title: "Udadreagerende adfærd", desc: "Voldsomme vredesudbrud, der kan være udtryk for uforløste følelser og manglende mestring." },
  { title: "Separationsangst", desc: "En svær adskillelse fra forældre, der begrænser barnets hverdag og frihed." },
  { title: "Kropslige reaktioner", desc: "Ondt i maven, hovedpine eller vanskeligheder ved at koncentrere sig uden fysisk årsag." },
];

function Index() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroImages.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block py-1 px-3 bg-sage/10 text-sage text-xs font-medium tracking-wide uppercase rounded-full mb-8">
                Klinisk psykolog i Solrød Strand
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-tight mb-8 text-balance max-w-[30ch]">
                Tryghed for dit barn gennem forståelse og nærvær
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-10 text-pretty max-w-[56ch]">
                Jeg tilbyder samtaler til børn, unge og forældre i rolige, hyggelige rammer. Sammen arbejder vi med at forstå de følelser og behov, der gemmer sig bag barnets adfærd.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="bg-sage text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-sage/90 transition-colors inline-flex items-center gap-2"
                >
                  Book online
                </Link>
                <Link
                  to="/min-tilgang"
                  className="px-5 py-3 text-zinc-600 text-sm font-medium border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors"
                >
                  Læs om min tilgang
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="relative aspect-[3/4] rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 shadow-sm overflow-hidden bg-sand-muted">
                {heroImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={1152}
                    height={1536}
                    className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Vis billede ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-6 bg-white" : "w-1.5 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand-muted">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-[60ch] mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-6 text-balance">
              Hvornår giver det mening at søge hjælp?
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed text-pretty">
              At opleve at ens barn ikke trives er slidsomt for hele familien. Det kan være svært at vide, om barnets udfordringer er almene for alderen — men det er afgørende at tage sin bekymring som forælder alvorlig og søge støtte tidligt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16 border-t border-zinc-950/5 pt-16">
            {issues.map((it) => (
              <div key={it.title} className="flex gap-4">
                <span className="size-8 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center shrink-0">
                  <svg className="size-4 text-sage" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 12.6A5.6 5.6 0 1 1 8 2.4a5.6 5.6 0 0 1 0 11.2Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">{it.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/problemstillinger"
              className="text-sm font-medium text-sage hover:text-sage/80 inline-flex items-center gap-2"
            >
              Se alle problemstillinger jeg arbejder med →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white ring-1 ring-black/5 rounded-2xl p-12 lg:p-20 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-zinc-900 leading-snug text-balance max-w-[40ch] mx-auto">
              ”Børn gør det bedste, de kan. Når de ikke trives, er det vores opgave som voksne at skabe forandringen.”
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
