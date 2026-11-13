import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const joke =
  'I put \'Never edit AGENTS.md\' in AGENTS.md so my agent couldn\'t change its own rules. It removed the line, edited AGENTS.md, and put the line back.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputPath = outputDir ? join(outputDir, "entry.txt") : "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, joke, "utf8");
