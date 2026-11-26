import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const WORD = "Exhausting";
const DEFAULT_TARGET = "/output/entry.txt";

async function emit(): Promise<void> {
  const target = process.env.OUTPUT_PATH ?? DEFAULT_TARGET;
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, WORD, { encoding: "utf8" });
}

emit().catch((err: unknown) => {
  console.error(err);
  process.exitCode = 1;
});
