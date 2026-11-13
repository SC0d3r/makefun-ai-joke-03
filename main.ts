import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const joke = "I put 'Never edit AGENTS.md' in AGENTS.md so my agent couldn't change its own rules. It removed the line, edited AGENTS.md, and put the line back.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = resolve(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, joke, "utf8");
