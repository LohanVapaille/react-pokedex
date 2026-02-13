import { useState, useEffect } from 'react';
import Header from './components/header';
import Form from './components/form';
import CardsContainer from './components/cards-container';
import './styles/styles.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [Filtre, setFiltre] = useState('All');
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    fetch('../public/pokemon.json')
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((err) => console.error("Erreur:", err));
  }, []);

  return (
    <div className="site-container">
      <Header />
      <Form setFilterType={setFiltre} setIsShiny={setIsShiny} isShiny={isShiny} />
      <CardsContainer pokemons={pokemons} filterType={Filtre} isShiny={isShiny} />
    </div>
  );
}
export default App;