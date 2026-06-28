import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-karina.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

const navItems = [
  { to: "/", label: "Hjem" },
  { to: "/om-mig", label: "Om mig" },
  { to: "/min-tilgang", label: "Min tilgang" },
  { to: "/problemstillinger", label: "Problemstillinger" },
  { to: "/priser-og-vilkaar", label: "Priser og vilkår" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-sand/85 backdrop-blur-md border-b border-zinc-950/5">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Karina Isted – aut. psykolog">
          <img src={assetUrl(logo)} alt="Karina Isted, aut. psykolog" className="h-12 w-auto mix-blend-multiply" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-zinc-500 hover:text-sage transition-colors"
              activeProps={{ className: "text-sm font-medium text-ink" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          aria-label="Menu"
          className="md:hidden size-10 grid place-items-center"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-px bg-zinc-800 mb-1" />
          <div className="w-5 h-px bg-zinc-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-950/5 bg-sand">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-700 py-1"
                activeProps={{ className: "text-sm font-medium text-sage py-1" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}