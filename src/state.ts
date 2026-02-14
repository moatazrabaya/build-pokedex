
import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.ts";

export type State = {
	rl: Interface;
	registry: Record<string, CLICommand>;
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),
  };
}
