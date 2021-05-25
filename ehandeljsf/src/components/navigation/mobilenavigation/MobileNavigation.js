import { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import './MobileNavigation.css'
import { BackDrop } from '../../backdrop/BackDrop'

export const MobileNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div>
            <HamburgerButton drawerHandler={setOpenDrawer} />
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer} />}
        </div>
    )
}