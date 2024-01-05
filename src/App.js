// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/hello');
        const data = await response.json();
        setPokemonData(data);
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
        {pokemonData ? (
          <div>
            <h2>{pokemonData.name}</h2>
            <p>URL: {pokemonData.url}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
