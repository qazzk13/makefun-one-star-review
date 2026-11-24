import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan one-star review of sleep, an everyday essential.
// The grievance, stated like a ledger: eight hours taken, nothing returned.
// The turn lands in the last few words: as tired as the person who skipped it.
// Revision: first draft said "I gave sleep eight hours and woke up";
// "took ... gave nothing back ... left me" states the complaint more directly.
process.umask(0o022);

const line =
  "One star. Sleep took eight hours, gave nothing back, and left me exactly as tired as the person who skipped it.";

const len = [...line].length;
if (len < 1 || len > 160) {
  throw new Error(`entry must be 1-160 characters, got ${len}`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
