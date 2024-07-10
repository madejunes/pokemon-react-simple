import { useEffect, useState } from "react";
import "./styles/App.css";
import { getPokemonImageFromApiUrl } from "./utils/get-pokemon-image-from-api-url";
import { Pokemon, PokemonList } from "./interface";
import { POKEMONS_PER_PAGE } from "./utils/contants";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurentPage] = useState(1);

  // fetch pokemons from pokeapi
  useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (currentPage - 1) * POKEMONS_PER_PAGE;
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${POKEMONS_PER_PAGE}`;
      const response = await fetch(url);
      const data: PokemonList = await response.json();
      if (data?.results?.length) {
        setPokemons(data.results);
      }
    };

    fetchPokemons();
  }, [currentPage]);

  return (
    <div>
      <h1>Pokemon Simple App</h1>

      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            src={getPokemonImageFromApiUrl(pokemon.url)}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
