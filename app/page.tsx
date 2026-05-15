async function getPokemonList() {
  const pokemonNames = ["pikachu", "charmander", "bulbasaur", "squirtle"];

  const pokemonData = await Promise.all(
    pokemonNames.map(async (name) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      if (!res.ok) {
        throw new Error("Failed to fetch Pokemon");
      }

      return res.json();
    })
  );

  return pokemonData;
}

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <main className="min-h-screen bg-red-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Pokédex
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pokemonList.map((pokemon: any) => {
          const heightInMeters = pokemon.height / 10;
          const weightInKg = pokemon.weight / 10;

          return (
            <div
              key={pokemon.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <h2 className="text-2xl font-bold capitalize mb-4">
                {pokemon.name}
              </h2>

              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto"
              />

              <p>
                <strong>Height:</strong> {heightInMeters} m
              </p>

              <p>
                <strong>Weight:</strong> {weightInKg} kg
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}