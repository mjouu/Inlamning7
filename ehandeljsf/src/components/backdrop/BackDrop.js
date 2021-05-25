import './BackDrop.css'

export const BackDrop = ({ drawerHandler }) => {
    return (
        <div className="backdrop"
            onClick={() => drawerHandler(false)} />
    )
}