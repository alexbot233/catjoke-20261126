// CommonJS-style requires avoid Node 22's typeless-package ESM reparsing
// warning while keeping the output byte-for-byte identical.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// Comedic angle: misdirection. "Indoor cat" sets up a behavior complaint, but
// the punchline reframes her as a skeptical cosmologist who doubts the apartment
// is indoors at all — the promised house-training problem lands as an
// epistemology problem.
const ENTRY =
  "My cat is an indoor cat — she's just not convinced the apartment is indoors.";

function validate(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  if (line.length > 200) {
    throw new Error("Entry must be at most 200 characters");
  }
}

validate(ENTRY);

const outDir = process.env.OUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
