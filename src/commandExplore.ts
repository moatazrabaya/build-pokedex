
import { State } from "./state.js";
import type { LocationArea } from "./pokeapi.js";
export async function commandExplore(state: State, ...args: string[]): Promise<void> {
	
	  if (args.length === 0) {
		console.log("You must provide a name of location area");
		return;
	  }

	  const areaName = args[0];

	  console.log(`Exploring ${areaName}...`);

	  try {
		const area = await state.api.fetchAreaPokemons(areaName);
		console.log("Found Pokemon:");
		for (const item of area.pokemon_encounters) {
		  console.log(` - ${item.pokemon.name}`);
		}
	  } catch {
		console.log("Location area not found.");
	  }
  
}
