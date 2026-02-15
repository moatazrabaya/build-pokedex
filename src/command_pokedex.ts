

import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {

	  const pokedex = state.catchedPokemons;

	  if(Object.keys(pokedex).length==0){
		  console.log("There is no pokedex");
	  }
	  else{
		  console.log("Your Pokedex:");
		  Object.keys(pokedex).forEach(key => {
			  console.log(` - ${key}`); // pikachu, bulbasaur, charmander
		  });
	  }
}
