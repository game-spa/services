import './set-public-path';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

// Anything exported from this file is importable by other in-browser modules.
export async function findGame(name) {
  const response = await instance.get(`/games?search=${name}`, {
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response.data || {};
}