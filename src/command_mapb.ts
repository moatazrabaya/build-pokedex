
import type { State } from "./state.js";

export async function commandMapb(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }

  const data = await state.api.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;

  for (const location of data.results) {
    console.log(location.name);
  }
}