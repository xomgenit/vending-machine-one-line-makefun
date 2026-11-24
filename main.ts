import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Are you a snack? Because you have been stuck in my head like the crisps on coil D3, and I cannot stop shaking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);

// Gate check: the entry must be a single line of 1-200 characters.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`Entry fails the 1-200 character gate: ${entry.length} chars`);
}
