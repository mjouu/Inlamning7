import './ProfileDropDown.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/Routingpath'
import { UserContext } from '../../../shared/provider/UserProvider'
import Routingpath from '../../../routes/Routingpath'

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        history.push(Routingpath.homeView)
    }

    return (
        <div className='profileDropDownWrapper'>
            <span>Firstname Lastname</span>
            <span>Email</span>
            <hr />
            <span onClick ={() => history.push(RoutingPath.profileView)}>Profile</span>
            <span onClick ={() => history.push(RoutingPath.settingsView)}>Settings</span>
            <span onClick ={() => history.push(RoutingPath.favouritesView)}>Favorites</span>
            <span onClick={() => logout()}>Logout</span>
        </div>
    )
}
