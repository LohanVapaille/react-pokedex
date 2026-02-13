export default function Card({ data, isShiny }) {
  // 1. On prépare les données avant le return pour plus de clarté
  const name = data.name.fr;
  const id = data.pokedexId;

  //gestion de l'image
  let sprite;
  if (isShiny === true) {

    sprite = data.sprites.shiny;
  } else {

    sprite = data.sprites.regular;
  }

  // Récupération de la couleur du type principal (pour le fond)
  // On utilise une valeur par défaut 'normal' au cas où
  const mainTypeName = data.types[0]?.name.toLowerCase();
  const cardColor = `var(--color-${mainTypeName})`;

  return (
    <article className="card" style={{ '--color': cardColor }}>

      <span className="card__label">HP {data.stats.hp}</span>
      <img src={sprite} alt={name} className="card__img" />
      <h3 className="card__title"><strong>{name}</strong></h3>

      <div className="card__types">
        {data.types.map((type, index) => {
          const typeColor = `var(--color-${type.name.toLowerCase()})`;
          return (
            <span
              key={index}
              className="card__type"
              style={{ '--color': typeColor }}
            >
              {type.name}
            </span>
          );
        })}
      </div>

      <div className="card__stats">
        <div><strong>{data.stats.atk}</strong><p>ATK</p></div>
        <div><strong>{data.stats.def}</strong><p>DEF</p></div>
        <div><strong>{data.stats.vit}</strong><p>VIT</p></div>
      </div>


      <span className="card__number">#{id}</span>
    </article>
  );
}