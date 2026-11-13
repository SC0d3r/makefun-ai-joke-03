import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const joke =
  'My agent compacted the session. It kept "user approved the plan." It dropped the plan.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputPath = outputDir ? join(outputDir, "entry.txt") : "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${joke}\n`, "utf8");
