
import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
	
	  if (args.length === 0) {
		console.log("You must provide a name of pokemon");
		return;
	  }

	  const pokemonName = args[0].toLowerCase();

	  console.log(`Throwing a Pokeball at ${pokemonName}...`);

	  try {
			const pokemon = await state.api.fetchPokemon(pokemonName);
			
			// many base_experience values less than 600
			const catchChance = 1 - pokemon.base_experience / 600;
			const roll = Math.random();

			if (roll < catchChance) {
			  console.log(`${pokemon.name} was caught!`);

			  state.catchedPokemons[pokemon.name] = pokemon;
			} 
			else {
			  console.log(`${pokemon.name} escaped!`);
			}
	  } catch {
		console.log("Pokemon not found.");
	  }
}
