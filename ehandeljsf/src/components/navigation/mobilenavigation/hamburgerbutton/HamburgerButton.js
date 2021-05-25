import './HamburgerButton.css'

export const HamburgerButton = ({ drawerHandler }) => {
    return (
        <button className="toggle-button" onClick={() => drawerHandler(true)}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
    )
}
