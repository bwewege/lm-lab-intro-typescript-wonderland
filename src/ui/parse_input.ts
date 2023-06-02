import { Hole, HOLES } from "../chapter_1/chapter_1.types";
import { Console, CONSOLES } from "../chapter_7/chapter_7_whats_next";

export function parseHoleInput(input: string): Hole | undefined {
  const chosenHole = parseInt(input);

  if (isNaN(chosenHole) || chosenHole < 0 || chosenHole > HOLES.length - 1) {
    return undefined;
  }

  return HOLES[chosenHole];
}

export function parseConsoleInput(input: string): Console | undefined {
  const chosenConsole = parseInt(input);

  if (
    isNaN(chosenConsole) ||
    chosenConsole < 0 ||
    chosenConsole > CONSOLES.length - 1
  ) {
    return undefined;
  }

  return CONSOLES[chosenConsole];
}
