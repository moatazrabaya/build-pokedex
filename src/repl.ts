
import readline from "readline";
import type { CLICommand } from "./command.js";
import { commandExit } from "./command_exit.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
  };
}

export function startREPL(){
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  prompt: "Pokedex > ",
	});

	rl.prompt();

	rl.on("line", (line) => {
		const arr = cleanInput(line);
		if(arr.length===0)
			rl.prompt();
		
		rl.prompt();
	});
}

export function cleanInput(input: string): string[] {
   const trimInput = input.trim();
   const lowerCaseInput = trimInput.toLowerCase();
   const arr = lowerCaseInput.split(" ");
   return arr;
}