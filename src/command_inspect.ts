
import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
	
	  if (args.length === 0) {
		console.log("You must provide a name of pokemon");
		return;
	  }

	  const pokemonName = args[0];

	  try {
		   const pokemon = state.catchedPokemons[pokemonName];
			
			console.log(`Name: ${pokemon.name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\nStats:`);
				
			pokemon.stats.forEach(ele => {
			  console.log(`  -${ele.stat.name}: ${ele.base_stat}`);
			});
			
			console.log("Types:");
			
			pokemon.types.forEach(ele => {
			  console.log(`  - ${ele.type.name}`);
			});
	  } catch {
		console.log("you have not caught that pokemon");
	  }
}

