## 🐾 Pokedex CLI

A simple command-line Pokédex built with TypeScript and Node.js.
It uses the public PokeAPI to fetch pokemon and location data, and lets you explore areas, catch Pokémon, and inspect the ones you've caught.
  
This project was built as a learning exercise to practice:
  
- Building a CLI with Node.js
  
- Working with APIs
  
- Using TypeScript types properly
  
- Implementing caching
  
- Managing application state

## 🚀 Features

- Browse location areas

- Explore an area to see which Pokémon appear there

- Catch Pokémon with a random chance system

- Store caught Pokémon in your own in-memory Pokédex

- Inspect detailed stats of Pokémon you've caught

- Built-in caching layer to reduce unnecessary API calls

## 🛠 Tech Stack

- Node.js

- TypeScript

- PokeAPI (https://pokeapi.co/)

- Readline for CLI interaction

## 🧠How Catching Works

When you attempt to catch a Pokémon, the program uses its base experience to determine how hard it is to catch. Higher base experience means a lower chance of success.
Caught Pokémon are stored in memory for the current session.

## 📝 Notes

- The Pokédex is session-based (data resets when the program stops).

- API responses are cached to improve performance.

- The project focuses on clean structure and separation of concerns.
