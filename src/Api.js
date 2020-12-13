import axios from 'axios';

function getAllBeers() {
  return axios.get('http://localhost/api/beer')
    .then(res => res.data);
}

function createBeer(data) {
  axios.post('http://localhost/api/beer', data);
}

export { getAllBeers };