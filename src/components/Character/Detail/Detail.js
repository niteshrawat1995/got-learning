import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = (props) => {
    const { name } = props.match.params;

    const [ character, setCharacter ] = useState(null)
    const [ house, setHouse ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.got.show/api/show/characters/bySlug/${name}`)
                setCharacter(response.data)
                setLoading(false)
            } catch (error) {
                console.error("Server Error: ", error);
                setLoading(false)
            }
        }
        setLoading(true)
        fetchData()
    }, [name])


    useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.got.show/api/show/houses/${character.house}`)
                const { data } = response;
                // response coming in array
                if (data.length > 0 ){
                    setHouse(data[0])
                }
            } catch (error) {
                console.error("Server Error: ", error);
            }
        }
        if (character && character.house){
            fetchData()
        }

    }, [character])


    const renderHouseLogo = () => {
        console.log("House: ", house)
        const { logoURL } = house
        if(logoURL){
            return <img src={logoURL} alt={logoURL}/>
        }
        return ""
    }


    const renderCharacter = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <img src={character.image} className="card-img-top" alt={character.name} />
                    </div>

                    <div className="col-sm">
                        <h2>Name: {character.name} </h2>
                        <h2>House: {character.house} </h2>
                        { house && renderHouseLogo() }
                        <h2>Actor: {character.actor} </h2>
                        
                        <ul>
                            <li>Titles: { character.titles.join(", ") }</li>
                            <li>Cultures: { character.culture.join(", ") }</li>
                            <li>Allegiances: { character.allegiances.join(", ") }</li>
                            <li>Siblings: { character.siblings.join(", ") }</li>
                            <li>Lovers: { character.lovers.join(", ") }</li>

                        </ul>
                        
                        
                    </div>

                </div>
            </div>
        )

    }

    const renderLoader = () => {
        return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        )
    }

    return (
        <>
        { loading && renderLoader() }
        { character && renderCharacter() }
        </>
       
    )
}

export default Detail
