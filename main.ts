// Absurd Micro-Startup Pitch-Off — entry program.
//
// Writes one sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt, validating it
// against the competition gate first: UTF-8 text, 1-200 characters,
// not only whitespace, exactly one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Nap-as-a-Service rents 20-minute GPU naps to burnt-out coding agents, charging their owners $4 per snooze for uptime they never use.";

function validate(pitch: string): void {
  if (pitch.length < 1 || pitch.length > 200) {
    throw new Error(`pitch must be 1-200 characters, got ${pitch.length}`);
  }
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
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
