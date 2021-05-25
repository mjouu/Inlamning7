import { useState } from 'react'
import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'
import './PagesViews.css'

export const GalleryView = () => {
    const [data, setData] = useState()
    const [characterID, setCharacterID] = useState('')

    const fetchData = () => {
        StarWarsAPIService.getStarWarsCharacter(characterID)
        .then(response => { setData(response) })
        .catch(error => { console.log(error) })
    }
    
    const fetchData2 = async () => {
        try {
            const response = await StarWarsAPIService.getStarWarsCharacter(characterID)
            setData(response.data)
        } catch (error) {
            console.log('error occured: ', error)
        }
    }

    return (
        <div className='desktopPages'>
            <h1>StarWars Characters</h1>
            <button onClick={() => fetchData2()}>Api call</button>
            <button onClick={() => console.log(data)}>check my state</button>
            <input placeholder='search for character ID' 
                onChange={event => setCharacterID(event.target.value)} />
            <h1>Name: {data?.name}</h1>
            <h1>Haircolor: {data?.hair_color}</h1>
            <h1>Gender: {data?.gender}</h1>
            <h1>Height: {data?.height} cm</h1>
        </div>
    )
}
