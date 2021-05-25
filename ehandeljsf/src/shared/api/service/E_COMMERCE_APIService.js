import http from '../E_COMMERCE_API'

const getAllUsers = () => {
    return http.get('/user')
}

export default {
    getAllUsers
}