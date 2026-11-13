import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const joke =
  "My agent asked me to review its code. I found a bug. It asked me to review my tone.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${joke}\n`);
