import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import './PagesViews.css'

export const ShopView = () => {
    const [data, setData] = useState()
    const [search,setSearch] = useState('')
    const debounceSearchTerm = useDebounce(search, 600)

    const fetchData = async (x) => {
        if (debounceSearchTerm) {
            const { data } = await PokemonAPIService.searchCharacter(x)
            setData(data)
        }
    }

    useEffect(() => {
        fetchData(search)
    }, [debounceSearchTerm])

    return (
        <div className='desktopPages'>
            <input placeholder='search for pokemon' onChange={event => setSearch(event.target.value)} />
            <h1>Name: {data?.name}</h1>
            <h1>ID: {data?.id}</h1>
            <h1>Height: {data?.height}</h1>
            <h1>Weight: {data?.weight} lb</h1>
            <h1>Type: {data?.types?.[0]?.type?.name}</h1>
        </div>
    )
}