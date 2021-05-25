import Axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

const PokemonAPI = Axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
})

export default PokemonAPI