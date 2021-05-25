import React, { useContext, useEffect } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { GalleryView } from '../view/navigationtabviews/GalleryView'
import { NewsView } from '../view/navigationtabviews/NewsView'
import { ShopView } from '../view/navigationtabviews/ShopView'
import { SignInView } from '../view/navigationtabviews/SignInView'
import { ProfileView } from '../view/profiledropdownviews/ProfileView'
import { SettingsView } from '../view/profiledropdownviews/SettingsView'
import { FavouritesView } from '../view/profiledropdownviews/FavouritesView'
import RoutingPath from './Routingpath'

export const Routes = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated) => {
        return authenticatedUser ? HomeView : navigateToViewIfAuthenticated
    }

    const authenticatedRequired = (navigateToViewIfAuthenticated) => {
        return authenticatedUser ? navigateToViewIfAuthenticated : SignInView
    }

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('username')
        if (getLocalStorage) {
            setAuthenticatedUser(getLocalStorage)
        }
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    })

    return (
         <BrowserRouter>
             {children}
              <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.profileView} component={authenticatedRequired(ProfileView)} />
                <Route exact path={RoutingPath.settingsView} component={authenticatedRequired(SettingsView)} />
                <Route exact path={RoutingPath.favouritesView} component={authenticatedRequired(FavouritesView)} />
                <Route component={HomeView} />
             </Switch>
         </BrowserRouter>
    )
}
