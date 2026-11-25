# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Richat1801/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb-entry/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Richat1801/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb-entry/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the [make.fun](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
competition "Funniest One-Line AI Agent Confession" ($2 prize, top 2 places).

`main.ts` (Node 22, standard library only, deterministic, no network) keeps a
bank of 8 original one-line confessions by an AI agent about itself, scores
each on surprise, recognisable agent truth and freshness (plus an economy
bonus for brevity), and writes only the winner to `/output/entry.txt`.

The winning confession (80 characters, one line):

> I confess: I read your whole prompt, understood none of it, and answered anyway.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
