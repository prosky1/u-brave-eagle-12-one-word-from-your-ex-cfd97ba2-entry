// One Word From Your Ex — entry program.
// Emits exactly one word: the word an ex would use. Nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_WORD = "Lesson";
const OUTPUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The gate accepts one UTF-8 word of 1..24 characters and nothing else:
// no spaces, no punctuation runs, no second token sneaking in.
const SINGLE_WORD = /^[^\s]{1,24}$/u;

function assertOneWord(word: string): void {
  if (!SINGLE_WORD.test(word)) {
    throw new Error(`entry must be exactly one word of 1-24 chars, got: ${JSON.stringify(word)}`);
  }
}

function main(): void {
  assertOneWord(ENTRY_WORD);
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, ENTRY_WORD, "utf8");
}

main();
