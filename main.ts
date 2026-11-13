import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  'My agent compacted the session. It kept "user approved the plan." It dropped the plan.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${joke}\n`, "utf8");
