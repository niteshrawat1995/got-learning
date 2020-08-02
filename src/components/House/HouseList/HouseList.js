import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HouseCard from '../HouseCard/HouseCard'
import Search from '../../Search/Search'

import "./HouseList.css"

const HouseList = (props) => {

    const [ houses, setHouses ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ query, setQuery ] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://api.got.show//api/show/houses")
                setHouses(response.data)
                console.log(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const renderHouses = () => {
        let renderList = [];

        houses.forEach(house => {
            if (house.name.toLowerCase().includes(query)){
                renderList.push((
                        <div className="col-md-3 col-sm-6 mb-4 card-col" key={house._id}>
                            <HouseCard house={house} />
                        </div>
                    )
                )
            }})
        
        return renderList
    }
    
    return (
        <div>
        <div className="container">
            <div className="row justify-content-center m-4">
                <Search setQuery={(q) => setQuery(q)}/>
            </div>
            <div className="row justify-content-center">
                { loading && 
                // loader jsx
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
                </div> 
                }

                { !loading && houses && renderHouses() }
            </div>
        </div>
        </div>
    )
}

export default HouseList
