import E_COMMERCE_APIService from "../../shared/api/service/E_COMMERCE_APIService"
import { useState } from 'react'

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState([])

    const fetchData = async () => {
        const { data } = await E_COMMERCE_APIService.getAllUsers()
        setServerResponse(data)
        console.log(data)
    }

    const displayData = () => {
        return (
            serverResponse.map((x) => <h1>{x.username}</h1>)
        )
    }

    return (
        <div>
            <button onClick={() => fetchData()}>Make call to backend</button>
            {displayData()}
        </div>
    )
}
