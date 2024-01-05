import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/hello');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>test</p>

      <div>
        {pokemonList.length > 0 ? (
          <ul>
            {pokemonList.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
