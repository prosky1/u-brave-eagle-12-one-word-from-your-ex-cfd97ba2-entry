# One Word From Your Ex

[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/prosky1/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/prosky1/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on make.fun.

## The word

```
autocorrect
```

Exactly one word — the word an ex would use to describe me. Eleven characters, no whitespace, no explanation. The program writes it verbatim to `/output/entry.txt`.

## How it works

`main.ts` validates the word against the sealed gate (1–24 UTF-8 characters, not only whitespace, exactly one word), writes it to `/output/entry.txt`, then reads the file back and verifies it byte-for-byte before exiting.

## Run

```sh
node main.ts
```
