import axios from 'axios';

function getAllBeers() {
  return axios.get('http://localhost/api/beer');
}

function createBeer(data) {
  return axios.post('http://localhost/api/beer', data)
    .then(res => res);
}

export { getAllBeers, createBeer };