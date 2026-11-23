// main.ts — "How Many Tabs Do You Have Open?" (make.fun)
// Writes one number, digits only, to /output/entry.txt:
// the honest count of browser tabs open at build time. It is a fixed,
// counted number — not generated, not read from anywhere, not fetched:
// the same digits every run, so the entry is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TABS_OPEN = 127;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), String(TABS_OPEN), "utf8");
