// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // SSR error wrapper entry.
    server: { entry: "server" },
    // Build a pure SPA: prerender the shell HTML and let the client router
    // take over for all routes. Required for GitHub Pages hosting.
    spa: { enabled: true },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/om-mig", prerender: { enabled: true } },
      { path: "/min-tilgang", prerender: { enabled: true } },
      { path: "/problemstillinger", prerender: { enabled: true } },
      { path: "/priser-og-vilkaar", prerender: { enabled: true } },
      { path: "/kontakt", prerender: { enabled: true } },
    ],
  },
});
