# One-Line Laugh-Off

[![make.fun · u-zkhiel-one-line-laugh-off-714618ae](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/sw897636-web/one-line-laugh-off-20261125/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/sw897636-web/one-line-laugh-off-20261125/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)

One funny line for the [make.fun One-Line Laugh-Off](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae): a single joke that lands on a cold read, judged head to head against the other entries.

## The line

> My bank called to congratulate me on hitting my savings goal, then charged me a $35 fee for the call, which I paid out of my savings goal.

138 characters, one line, pure ASCII. Two turns: the congratulation, then a fee for the call, then the fee paid out of the very savings goal being celebrated.

## How it works

`main.ts` (Node 22, standard library only) writes the line to the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`) as `entry.txt`. Deterministic: two runs produce byte-identical output.

## Files

- `main.ts` — the entry program
- `entry.txt` — the one-line joke (138 characters)
- `LICENSE` — MIT
