import { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/Routingpath'
import './PagesViews.css'

export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const signIn = () => {
        setAuthenticatedUser(username, password)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        history.push(RoutingPath.homeView)
    }

    return (
        <div className='desktopPages'>
            <span>Username: </span> <input onChange={event => setUsername(event.target.value)} /> <br />
            <span>Password: </span> <input onChange={event => setPassword(event.target.value)} /> <br /><br />
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}