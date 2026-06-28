// Resolves a Lovable asset pointer (*.asset.json) to a URL that works both in
// the Lovable preview (where /__l5e/... is served by the platform) and in
// static deploys like GitHub Pages, where the file is bundled into
// public/cdn-assets/<asset_id>/<filename> by scripts/download-assets.mjs.

type AssetPointer = {
  asset_id: string;
  original_filename: string;
  url: string;
};

// When BASE_URL is "/" we're either in the Lovable preview/published app or on
// a custom domain, where the /__l5e/... CDN path is valid. For any other base
// (e.g. "/karina-isted/" on GitHub Pages) we use the locally bundled copy.
export function assetUrl(asset: AssetPointer): string {
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") return asset.url;
  return `${base}cdn-assets/${asset.asset_id}/${asset.original_filename}`;
}