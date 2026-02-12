
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
	
	const commands = getCommands();
	
	rl.prompt();

	rl.on("line", (line) => {
		const words = cleanInput(line);

		if (words.length === 0) {
		  rl.prompt();
		  return;
		}

		const commandName = words[0];
		const command = commands[commandName];

		if (!command) {
		  console.log("Unknown command");
		  rl.prompt();
		  return;
		}
		
		command.callback(commands);	
		rl.prompt();
	});
}

export function cleanInput(input: string): string[] {
   const trimInput = input.trim();
   const lowerCaseInput = trimInput.toLowerCase();
   const arr = lowerCaseInput.split(" ");
   return arr;
}