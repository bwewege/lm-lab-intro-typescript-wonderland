import { endAdventure } from "../..";
import { clear, print, askQuestion } from "../ui/console";

const CONSOLES = ["PS4", "Xbox", "Nintendo Switch"] as const;
type console = (typeof CONSOLES)[number];

export function whatsNext(): void {
  clear(false);
  print("------------------------");
  print(`Whats are you going to do now?`);
  print("------------------------");
  askQuestion("What do you want to do now?", failImmediately);
}

function failImmediately() {
  clear(false);
  return endAdventure();
}
