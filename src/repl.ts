
import readline from "readline";

export function cleanInput(input: string): string[] {
   const trimInput = input.trim();
   const lowerCaseInput = trimInput.toLowerCase();
   const arr = lowerCaseInput.split(" ");
   return arr;
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