export const getPokemonInfo = async (pokemon) => {
    const res = await fetch(`'https://ex.traction.one/pokedex/pokemon/${pokemon}'`);
    return res.json();
  };
  
