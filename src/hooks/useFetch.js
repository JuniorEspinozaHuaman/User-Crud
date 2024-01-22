import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
  const [response, setResponse] = useState()

    //READ
    const getApi = () => {
        const url = `${baseUrl}/users/`
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }
    
    //CREATE
    const creatApi = (data) => {
        const url = `${baseUrl}/users/`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setResponse( [...response, res.data] )
        })
        .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (id) => {
        const url = `${baseUrl}/users/${id}/`
        axios.delete(url)
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
    }

    //UPDATE
    const updateApi = (id, data) => {
        const url = `${baseUrl}/users/${id}/`
        axios.put(url, data)
        .then(res => {
            console.log(res.data)
            setResponse(response.map(user => user.id === id ? res.data : user ))
        })
        .catch(err => console.log(err))
    }

    return [ response, getApi, creatApi, deleteApi, updateApi ]
}

export default useFetch