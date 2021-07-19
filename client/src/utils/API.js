import axios from 'axios';

export default {
  // Gets List from Pokemon API (Games.js, Line 41)
  getPokemonList: async function () {
    return await axios.get('https://pokeapi.co/api/v2/generation/1');
  },
  // Gets Pics from Pokemon API based on var (Games.js, Line 120)
  getPokemonPics: async function (chosenWord) {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${chosenWord}`);
  },
  // Gets Particular Pokedex info bas on id inserted (Pokedex.js, Line 69)
  getPokedex: async function (id) {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  },
  // Post Pokemon Data they caught in the Game to DB
  postGameResult: function (body) {
    return axios.post('/api/pokemon', body);
  },
  // Gets all pokemon caught by specific user
  getPokemon: async function () {
    return await axios.get('/api/pokemon');
  },
  // Reset user's pokedex
  resetPokedex: function () {
    return axios.delete('/api/pokemon/delete');
  },
  // Saves a book to the database
  signupUser: function (info) {
    return axios.post('/api/user', info);
  },
  // Saves a book to the database
  loginUser: async function (info) {
    return axios.post('/api/user/login', info);
  },
  // Saves a book to the database
  logoutUser: function (info) {
    return axios.post('/api/user/logout', info);
  },
  // Saves a book to the database
  updatePassword: function (info) {
    return axios.put('/api/user/login', info);
  },
  getUsername: function () {
    return axios.get('/api/user');
  },
  getUserInfo: function () {
    return axios.get('/api/user/login');
  },
  increasePokemonAmount: function (info) {
    return axios.put('/api/pokemon', info);
  },
  getOnlineUsers: function () {
    return axios.get('/api/user/online');
  },
  getGeneration: function () {
    return axios.get('/api/pokemon/pokedex');
  },
  createGeneration: function (info) {
    return axios.post('/api/pokemon/pokedex', info);
  },
};
