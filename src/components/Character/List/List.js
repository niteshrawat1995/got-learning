import React, {useEffect, useState} from 'react'
import Card from "../Card/Card"
import axios from 'axios';
import Search from '../../Search/Search';
import Filter from '../../FIlter/Filter';
import _, { filter } from "lodash"

const List = () => {

    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ query, setQuery ] = useState("")
    const [ houseList, setHouseList ] = useState([])
    const [ houseQuery, setHouseQuery ] = useState("")

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

    useEffect(() => {
        const presentHouseList = _.uniqBy(characters, val => val.house).map((character, idx) => { return {id: idx, name: character.house} })  
        setHouseList(presentHouseList)

    }, [characters])


    const renderCharacters = () => {

        let renderList = [];
        // debugger
        
        characters.forEach(character => {

            // debugger
            if (character.name.toLowerCase().includes(query)){

                if((houseQuery && character.house === houseQuery) || houseQuery===""){
                    renderList.push((
                        <div className="col-md-3 col-sm-6 mb-4 card-col" key={character._id}>
                            <Card character={character} />
                        </div>
                    ))
                }
                
            }})
        
        return renderList
    }

    return (
        <div className="container">
            <div className="row justify-content-center m-4">
                <Search setQuery={(q) => setQuery(q)}/>
                <Filter 
                filterList={ houseList }
                filterTitle="Houses"
                setQuery={(q) => setHouseQuery(q) }/>
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
