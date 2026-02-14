
export class PokeAPI {
	
	  private static readonly baseURL = "https://pokeapi.co/api/v2";

	  constructor() {}

	  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
			const url =
			  pageURL ?? `${PokeAPI.baseURL}/location-area?limit=20`;

			const response = await fetch(url);

			if (!response.ok) {
			  throw new Error("Failed to fetch locations");
			}

			const data: ShallowLocations = await response.json();
			return data;
	  }

	  async fetchLocation(locationName: string): Promise<Location> {
			const response = await fetch(
			  `${PokeAPI.baseURL}/location-area/${locationName}`
			);

			if (!response.ok) {
			  throw new Error("Failed to fetch location");
			}

			const data: Location = await response.json();
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
