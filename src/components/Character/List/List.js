import React, {useEffect, useState} from 'react'
import Card from "../Card/Card"
import axios from 'axios';
import Search from '../../Search/Search';

const List = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [ query, setQuery ] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://api.got.show/api/show/characters")
                setCharacters(response.data)
                setLoading(false)
            }
            catch(err){
                console.error(err);
                setLoading(false)
            }
        }
        setLoading(true)
        fetchData()
        
    }, [])


    const renderCharacters = () => {

        let renderList = [];

        characters.forEach(character => {
            if (character.name.toLowerCase().includes(query)){
                renderList.push((
                        <div className="col-md-3 col-sm-6 mb-4 card-col" key={character._id}>
                            <Card character={character} />
                        </div>
                    )
                )
            }})
        
        return renderList
    }

    return (
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
            { !loading && characters && renderCharacters() }
            </div>
            
        </div>
    )
}

export default List
