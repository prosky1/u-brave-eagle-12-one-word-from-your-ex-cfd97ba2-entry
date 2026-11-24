// One Word From Your Ex — make.fun entry.
// Writes exactly one word to /output/entry.txt: the word an ex would
// use to describe me. The gate requires 1-24 UTF-8 characters, not
// only whitespace. The word is "placeholder" (11 characters).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "placeholder";

const OUTPUT_PATH = "/output/entry.txt";

// Gate check, mirroring the sealed scorer: 1-24 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
function validateWord(text: string): void {
  if (text.length < 1 || text.length > 24) {
    throw new Error(`Word must be 1-24 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Word must not be only whitespace.");
  }
  if (/\s/.test(text)) {
    throw new Error("Entry must be exactly one word (no whitespace).");
  }
  if (!/^[A-Za-z]+$/.test(text)) {
    throw new Error("Entry must be a single word of letters only.");
  }
}

validateWord(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");

// Read back and verify: what the judge reads must be byte-for-byte the word.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== WORD) {
  throw new Error(
    `Verification failed: output differs from the word (${written.length} chars written, ${WORD.length} expected).`,
  );
}
console.log(`Wrote ${WORD.length} characters to ${OUTPUT_PATH}`);
