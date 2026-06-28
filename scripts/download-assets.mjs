#!/usr/bin/env node
// Downloads all Lovable CDN assets referenced by *.asset.json pointers into
// public/cdn-assets/<asset_id>/<filename> so the static build (e.g. GitHub
// Pages) can serve them without depending on Lovable's /__l5e/ infrastructure.
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const SRC_DIR = path.join(ROOT, "src");
const OUT_DIR = path.join(ROOT, "public", "cdn-assets");
const CDN_ORIGIN =
  process.env.LOVABLE_ASSET_ORIGIN || "https://karina-isted.lovable.app";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".asset.json")) yield p;
  }
}

async function ensureAsset(pointerPath) {
  const raw = JSON.parse(await readFile(pointerPath, "utf8"));
  const { asset_id, original_filename, url } = raw;
  if (!asset_id || !original_filename || !url) return null;
  const destDir = path.join(OUT_DIR, asset_id);
  const destFile = path.join(destDir, original_filename);
  if (existsSync(destFile) && (await stat(destFile)).size > 0) {
    return { asset_id, original_filename, cached: true };
  }
  await mkdir(destDir, { recursive: true });
  const remote = `${CDN_ORIGIN}${url}`;
  const res = await fetch(remote);
  if (!res.ok) throw new Error(`Failed ${res.status} for ${remote}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destFile, buf);
  return { asset_id, original_filename, cached: false, bytes: buf.length };
}

const results = [];
for await (const p of walk(SRC_DIR)) {
  try {
    const r = await ensureAsset(p);
    if (r) results.push(r);
  } catch (err) {
    console.error(`[assets] ${p}: ${err.message}`);
    process.exitCode = 1;
  }
}
console.log(
  `[assets] ${results.length} assets ready (${results.filter((r) => !r.cached).length} downloaded, ${results.filter((r) => r.cached).length} cached)`,
);