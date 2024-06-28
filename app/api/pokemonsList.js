
export async function fetchData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  }
  