import UserController from '../controllers/User.controller.js'

const routes = application => {
    application.post('/user', UserController.createUser)
    application.get('/user', UserController.getAllUsers)
    application.get('/user/:userId', UserController.getUserByID)
    application.delete('/user/:userId', UserController.deleteUserById)
    application.put('/update/:userId', UserController.updateUser)
    application.get('/search/user', UserController.getUserWithQuery)
}

export default { routes }