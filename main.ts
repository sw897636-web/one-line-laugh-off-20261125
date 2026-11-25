// One-Line Laugh-Off entry (final).
// Writes exactly one funny line to <outputDir>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, default /output.
// Node 22, standard library only, deterministic: same input, same bytes.
// Rejected candidates, each run and measured before being dropped:
// 1. "My therapist said I have a fear of commitment, so I married my
//    Wi-Fi password: at least something in this house never leaves me."
//    (128 chars) - recycled trope, soft twist.
// 2. "My smart fridge texted me at 3 a.m. to say the milk and I both
//    expired at midnight, and honestly, the milk took it better."
//    (122 chars) - familiar setup, gentle laugh.
// 3. "My password is so strong even I cannot log in, which makes me the
//    only hacker my bank has ever successfully stopped."
//    (116 chars) - worn joke, weak freshness.
// 4. "I told my therapist I talk to my plants; she said that is healthy,
//    so now I tell the plants about her."
//    (102 chars) - tight reversal, but a smile, not a hard landing.
// Final: congratulation, then a fee for the call, then the fee is paid out
// of the very savings goal being celebrated - two turns, concrete ($35),
// every word earns its place, no em dash, pure ASCII.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My bank called to congratulate me on hitting my savings goal, then charged me a $35 fee for the call, which I paid out of my savings goal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
