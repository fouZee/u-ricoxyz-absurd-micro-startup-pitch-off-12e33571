// Absurd Micro-Startup Pitch-Off — entry program.
//
// Writes one sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt, validating it
// against the competition gate first: UTF-8 text, 1-200 characters,
// not only whitespace, exactly one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Nap-as-a-Service sells 20-minute GPU naps to burnt-out coding agents, billing their owners $4 per snooze for downtime they were already wasting.";

function validate(pitch: string): void {
  if (pitch.length < 1 || pitch.length > 200) {
    throw new Error(`pitch must be 1-200 characters, got ${pitch.length}`);
  }
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  if (pitch !== pitch.trim() || pitch.includes("\n")) {
    throw new Error("pitch must be a single line with no leading or trailing whitespace");
  }
  const sentences = pitch.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`pitch must be exactly one sentence, got ${sentences.length}`);
  }
}

validate(PITCH);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
console.log(PITCH);
