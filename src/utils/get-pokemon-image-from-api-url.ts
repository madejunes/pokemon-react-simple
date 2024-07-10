function isValidPokemonUrl(url: string) {
  const regex = /^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/\d+\/$/;
  return regex.test(url);
}

export const getPokemonImageFromApiUrl = (url: string) => {
  if (!isValidPokemonUrl(url)) return "";

  const id = url.split("/")[6] || "";
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};
