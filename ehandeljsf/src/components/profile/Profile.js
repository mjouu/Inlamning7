import { useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className='profileWrapper'>
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={'error...'} />
            <span>{authenticatedUser}</span>
            <ProfileDropDown />
        </div>
    )
}
