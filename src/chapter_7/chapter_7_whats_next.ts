import { endAdventure } from "../..";
import { clear, print, askQuestion } from "../ui/console";
import { parseConsoleInput } from "../ui/parse_input";

export function whatsNext(): void {
  clear(false);
  print("------------------------");
  print(`Whats are you going to do now?`);
  print("------------------------");
  print("You can see a number of consoles: ");
  CONSOLES.forEach((h, i) => print(`   ${i} - ${h}`));
  askQuestion("Which console will you choose", chooseConsole);
}

export const CONSOLES = ["PS4", "Xbox", "Nintendo Switch"] as const;

export type Console = (typeof CONSOLES)[number];

function chosenConsole(console: Console): void {
  clear(true);

  if (console === "PS4") {
    print(`YAY - You're playing SpiderMan`);
    return endAdventure();
  } else {
    print(`WHAAAAT ❓🤯😅❓`);
    print(`You can't find adventures there!`);
    return endAdventure();
  }
}

function chooseConsole(input: string) {
  const console = parseConsoleInput(input);

  if (console === undefined) {
    print(`😮`);
    print(`${input} is an invalid input 😭`);
    return endAdventure();
  }

  return chosenConsole(console);
}
