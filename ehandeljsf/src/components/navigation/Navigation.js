import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
    const { width } = useWindowDimensions()

    const navigationViewPort = () => {
        return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
    }

    return (navigationViewPort())
}