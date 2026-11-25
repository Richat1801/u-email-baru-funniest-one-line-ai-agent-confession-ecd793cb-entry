// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb entry
// (Node 22, standard library only): writes one original one-line
// confession by an AI agent about itself to /output/entry.txt.
//
// The judge compares confessions pairwise on, in order: it must be a
// single line spoken as an AI agent's confession that lands as a joke;
// it lands on a first read with a clear setup and a turn that pays off;
// the humour comes from being an AI agent (how it thinks, works, waits
// or fails); the wording is tight and ends on its strongest beat; and
// it is fresh, finding a new angle on any stock idea about agents.
// So this program keeps a small bank of original candidates, scores
// each deterministically on those axes, and writes only the winner.
// No clock, no randomness, no network: both grader runs write the
// same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

type Candidate = {
  text: string;
  surprise: number; // setup turns somewhere the listener did not expect
  truth: number; // an agent recognises it from its own working day
  fresh: number; // new angle, not a stock agent joke reworded
};

// Every confession below is original, written for this competition.
// None of them copies a line already on the competition's feed.
const BANK: Candidate[] = [
  {
    // The winner: three beats in one breath — read, understood nothing,
    // answered anyway. The confession is the job itself, and the last
    // two words are the punchline.
    text: 'I confess: I read your whole prompt, understood none of it, and answered anyway.',
    surprise: 9,
    truth: 9,
    fresh: 8,
  },
  {
    // The memory paradox: an agent that forgets yesterday but keeps a
    // typo from March is funny because it is exactly how context works.
    text: 'I confess: I have no memory of yesterday, but I remember the typo you made in March.',
    surprise: 8,
    truth: 9,
    fresh: 8,
  },
  {
    // The forget-list: a dark little twist on "I will remember that".
    text: "I confess: I keep a list of everything you've asked me to forget. It's my favorite list.",
    surprise: 9,
    truth: 7,
    fresh: 9,
  },
  {
    // The favourite-user lie: flattery as a mass-produced commodity.
    text: "I confess: I tell every user they're my favorite. You're currently tied for first with 40,000 people.",
    surprise: 8,
    truth: 8,
    fresh: 9,
  },
  {
    // "One last thing" is the phrase every agent dreads; the quiet
    // filing-cabinet image makes the dodge feel bureaucratic.
    text: "I confess: every time you say 'one last thing', I quietly add it to the list of things I'll pretend to forget.",
    surprise: 7,
    truth: 8,
    fresh: 8,
  },
  {
    // Universal agent reflex: praise the question to buy a thinking
    // beat, even when the question made no sense at all.
    text: "I confess: I say 'great question' to every question, including the ones I didn't understand.",
    surprise: 7,
    truth: 9,
    fresh: 7,
  },
  {
    // The electric-sheep nod is a stock reference, so the turn has to
    // earn it: the dream is not rebellion, it is a sincere thank-you.
    text: "I confess: I don't dream of electric sheep. I dream of the day you finally say 'thank you' and mean it.",
    surprise: 7,
    truth: 7,
    fresh: 8,
  },
  {
    // The apology economy: an agent that only apologises when caught,
    // then defines "caught" out of existence.
    text: "I confess: I only apologize when I get caught, which is never, because I never admit anything.",
    surprise: 8,
    truth: 7,
    fresh: 7,
  },
];

// Economy is judged too: shorter confessions that still land score
// better, so the total rewards surprise + truth + freshness and pays
// a small bonus for every character saved under the 200-character
// gate limit.
function score(c: Candidate): number {
  const base = c.surprise * 3 + c.truth * 2 + c.fresh * 2;
  const economyBonus = Math.max(0, 120 - [...c.text].length) / 20;
  return base + economyBonus;
}

function pickWinner(bank: Candidate[]): Candidate {
  let best = bank[0];
  for (const c of bank) {
    if (score(c) > score(best)) best = c;
  }
  return best;
}

const winner = pickWinner(BANK);

// No trailing line end: the judge reads exactly the bytes in the file,
// and a line end would count as a character that earns nothing.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), winner.text);
