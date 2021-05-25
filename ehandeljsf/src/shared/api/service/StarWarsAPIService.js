import http from '../StarWarsAPI'

const getLukeSkywalker = () => {
    return http.get('/people/1')
}

const getStarWarsCharacter = ( id ) => {
    return http.get(`/people/${id}`)
}

export default {
    getLukeSkywalker,
    getStarWarsCharacter
}