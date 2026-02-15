
import { Cache } from "./pokecache.js";

export class PokeAPI {
	
	  private static readonly baseURL = "https://pokeapi.co/api/v2";
	  
	  private cache = new Cache(50000);
	  
	  constructor() {}

	  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
			const url =
			  pageURL ?? `${PokeAPI.baseURL}/location-area?limit=20`;
			
			const value = this.cache.get<ShallowLocations>(url);
			
			if(value){
				console.log("caching...");
				return value;
			}

			const response = await fetch(url);

			if (!response.ok) {
			  throw new Error("Failed to fetch locations");
			}

			const data: ShallowLocations = await response.json();
			
			this.cache.add(url, data);
			
			return data;
	  }

	  async fetchLocation(locationName: string): Promise<Location> {
		  const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

			const value = this.cache.get<Location>(url);
			if (value) {
			  console.log("caching...");
			  return value;
			}

			const response = await fetch(url);

			if (!response.ok) {
			  throw new Error("Failed to fetch location");
			}

			const data: Location = await response.json();

			this.cache.add(url, data);

			return data;
	  }
	  
	  async fetchAreaPokemons(areaName: string): Promise<LocationArea> {
		  const url = `${PokeAPI.baseURL}/location-area/${areaName}`;
		  
		  const value = this.cache.get<LocationArea>(url);
		  
		  if (value) {
			  console.log("caching...");
			  return value;
		  }
		  
		  const response = await fetch(url);
	  
		  if (!response.ok) {
			  throw new Error("Failed to fetch area names");
		  }
		  
		  const data: LocationArea = await response.json();
		  
		  this.cache.add(url, data);

	      return data;
	  }
		  
}

export type ShallowLocations = {
	  count: number;
	  next: string | null;
	  previous: string | null;
	  results: {
		name: string;
		url: string;
	  }[];
};

export type Location = {
	  id: number;
	  name: string;
};

export type LocationArea = {
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};