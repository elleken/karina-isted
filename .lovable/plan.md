## Mål
Konvertere projektet til en ren statisk SPA der kan hostes på GitHub Pages.

## Ændringer

**1. Vite-config: SPA-mode**
- I `vite.config.ts` deaktivere SSR og prerender alle ruter til statiske HTML-filer
- Sætte `tanstackStart.client.base` så assets virker under repo-stien hvis nødvendigt (bruger root hvis det er en `username.github.io` repo, ellers `/karina-isted/`)
- Output skal lande i `./dist` (i stedet for `.output/`)

**2. Fjerne server-only kode**
- Slette `src/routes/sitemap[.]xml.ts` (dynamisk server-rute virker ikke statisk) og erstatte med en statisk `public/sitemap.xml`
- Fjerne `src/server.ts`-reference (kun nødvendig ved SSR)
- Fjerne `errorMiddleware` i `src/start.ts` (kun server-relevant)

**3. SPA-fallback til deep links**
- Tilføje step i workflow der kopierer `dist/index.html` til `dist/404.html` — GitHub Pages serverer 404.html ved ukendte URLs, som derefter lader klient-routeren håndtere ruten
- Tilføje `.nojekyll` i `dist/` så filer der starter med underscore (vigtigt for Vite assets) ikke filtreres væk

**4. Workflow (`deploy.yml`)**
- Tilføje base-path env var hvis nødvendigt
- Tilføje copy-step til `404.html` + `touch .nojekyll`
- Beholde upload af `./dist`

## Tekniske detaljer

```text
vite.config.ts
  tanstackStart: {
    spa: { enabled: true, prerender: { enabled: true, crawlLinks: true } },
    client: { base: process.env.BASE_PATH ?? "/" }
  }

dist/
  index.html         (hovedside)
  om-mig/index.html  (prerendered)
  ...
  404.html           (kopi af index.html for SPA-fallback)
  .nojekyll
```

## Begrænsninger efter konvertering
- Ingen server-funktioner/SSR mere — alt indhold er statisk eller klient-side
- Hvis du senere vil tilføje formularer, betalinger, login osv. skal det gå mod en ekstern API
- Sitemap.xml bliver statisk (manuel opdatering ved nye ruter)

## Næste skridt
Spørgsmål før jeg går i gang: **Hvad er navnet på dit GitHub repository?** Hvis det er noget i stil med `karina-isted` (ikke `<brugernavn>.github.io`), skal jeg sætte base-pathen til `/karina-isted/` ellers vil CSS/JS ikke loade.
