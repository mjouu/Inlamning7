import './DesktopNavigation.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.svg'
import RoutingPath from '../../../routes/Routingpath'
import { Profile } from '../../../components/profile/Profile'

export const DesktopNavigation = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const displayAuthUserOrSignIn = () => {
        return authenticatedUser
        ? <span className='authUserNavigation'> <Profile /> </span>
        : <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>sign in </span>
    }
    

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navLogo' onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt={'error...'} />
            <span className='galleryButton' onClick={() => history.push(RoutingPath.galleryView)}>gallery</span>
            <span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>news</span>
            <span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>shop</span>
            {displayAuthUserOrSignIn()}
        </div>
    )
}
