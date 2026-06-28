import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-20 bg-sand border-t border-zinc-950/5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h4 className="font-serif text-2xl text-zinc-900 mb-6">Karina Isted</h4>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-[40ch]">
              Autoriseret klinisk psykolog med praksis i Solrød Strand. Medlem af
              Dansk Psykologforening og uddannet i legeterapi.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-sage text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-sage/90 transition-colors"
              >
                Kontakt mig
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors"
              >
                Book online
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h5 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
                Find mig
              </h5>
              <p className="text-sm text-zinc-600 leading-loose">
                Solrød Center 70, 1. Sal.
                <br />
                2680 Solrød Strand
              </p>
            </div>
            <div>
              <h5 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
                Kontakt
              </h5>
              <p className="text-sm text-zinc-600 leading-loose">
                <a href="mailto:karinaisted@proton.me" className="hover:text-sage transition-colors">
                  karinaisted@proton.me
                </a>
                <br />
                <a href="tel:42664429" className="hover:text-sage transition-colors">
                  42 66 44 29
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-950/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Karina Isted. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-zinc-400">Autoriseret af Styrelsen for Patientsikkerhed</p>
        </div>
      </div>
    </footer>
  );
}