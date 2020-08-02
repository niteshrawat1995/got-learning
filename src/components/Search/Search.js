import React, { useState } from 'react'

const Search = (props) => {

    const [ text, setText ] = useState("")
    const { setQuery } = props

    return (

        <form className="form-inline">
        <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            autoFocus
            value={text}
            onChange={(e) => {
                setText(e.target.value)
                setQuery(e.target.value)
            }}
        />
        </form>
    )
}

export default Search
