export default function Form({ setFilterType, setIsShiny, isShiny }) {
  return (
    <section className="filters">

      <div className="select-box">
        <select onChange={(event) => setFilterType(event.target.value)}>
          <option value="All">Tous les types</option>
          <option value="Plante">Plante</option>
          <option value="Poison">Poison</option>
          <option value="Feu">Feu</option>
          <option value="Eau">Eau</option>
          <option value="Électrik">Électrik</option>
          <option value="Insecte">Insecte</option>
          <option value="Vol">Vol</option>
          <option value="Normal">Normal</option>

        </select>
      </div>


      <label className="main-title" style={{ fontSize: '16px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={isShiny}
          onChange={(event) => setIsShiny(event.target.checked)}
        />
        <strong style={{ marginLeft: '8px' }}>Mode Shiny</strong>
      </label>
    </section>
  );
}