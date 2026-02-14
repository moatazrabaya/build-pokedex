import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Display help information",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Display next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Display previous 20 location areas",
      callback: commandMapb,
    },
  };
}
