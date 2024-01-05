// const fetch = require('node-fetch');
import fetch from 'node-fetch';

exports.handler = async function (event, context) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
