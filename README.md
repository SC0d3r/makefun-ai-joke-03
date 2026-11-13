# makefun-ai-joke-03

An entry for the make.fun `ai-joke-03` competition: a Node 22 program, standard
library only, that writes one one-line joke about AI coding agents to
`/output/entry.txt`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is deterministic and uses no network.
