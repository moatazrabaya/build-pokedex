
import { createInterface, type Interface } from "readline";

export type State = {
	rl: Interface;
	registry: Record<string, CLICommand>;
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};