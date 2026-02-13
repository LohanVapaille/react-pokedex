import Card from './card';

export default function CardsContainer({ pokemons, filterType, isShiny }) {

  let filteredList = [];
  for (let p of pokemons) {
    if (filterType === "All") {
      filteredList.push(p);
    }

    else {

      for (let t of p.types) {
        if (t.name === filterType) {
          filteredList.push(p);
          break;
        }
      }
    }
  }

  return (

    <section className="cards">
      {filteredList.map((pokemon) => (
        <Card key={pokemon.pokedexId} data={pokemon} isShiny={isShiny} />
      ))}
    </section>
  );
}