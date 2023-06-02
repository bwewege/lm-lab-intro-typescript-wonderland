import { haveAdventures } from "../..";
import { clear, print, askQuestion } from "../ui/console";
import { parseConsoleInput } from "../ui/parse_input";

export function whatsNext(): void {
  clear(false);
  print("-------------------------------------");
  print(`🥱 Whats are you going to do now? 🥱`);
  print("-------------------------------------");
  print("You can see a number of consoles: 🎮");
  CONSOLES.forEach((h, i) => print(`   ${i} - ${h}`));
  askQuestion("Which console will you choose: 🤔", chooseConsole);
}

export const CONSOLES = ["PS4", "Xbox", "Nintendo Switch"] as const;
export type Console = (typeof CONSOLES)[number];

const PSGAMES = [
  "Spiderman",
  "God of War",
  "Fortnite",
  "Horizon Zero Dawn",
  "Uncharted",
] as const;
type PsGames = (typeof PSGAMES)[number];

function chosenConsole(console: Console): void {
  clear(true);

  if (console === "PS4") {
    print(
      "😃😃 YAY - You're playing " +
        PSGAMES[Math.floor(Math.random() * PSGAMES.length)] +
        "!!!! 😃😃"
    );
    askQuestion(
      "Press ENTER when you're ready to restart the adventure! ",
      haveAdventures
    );
  } else {
    return noGaming();
  }
}

export function noGaming(): void {
  print(`WHAAAAT ❓🤯😅❓`);
  print(`You didn't choose PS4 👎😯👎 !!!!`);
  print(`Best you restart the adventure!`);
  askQuestion("Press ENTER to restart! ", haveAdventures);
}

function chooseConsole(input: string) {
  const console = parseConsoleInput(input);

  if (console === undefined) {
    print(`😮`);
    print(`${input} is an invalid input 😭`);
    return whatsNext();
  }

  return chosenConsole(console);
}
