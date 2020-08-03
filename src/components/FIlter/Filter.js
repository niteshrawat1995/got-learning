import React, { useState } from 'react'

const Filter = (props) => {
    const { filterList, setQuery, filterTitle } = props; 
    const [ val, setVal ] = useState("")

    const handleChange = (e) => {
        setVal(e.target.value)
        setQuery(e.target.value)
    }


    return (
        <div>
            <div>
                <label className="form-label mr-2" htmlFor="postcode">
                { filterTitle }
                </label>

                <select 
                className="form-select" 
                id="postcode"
                value={val}
                onChange={handleChange}
                
                >
                    <option value="">Choose...</option>
                    { filterList.map(option => (
                        <option
                        key={ option.id }
                        value={ option.name }
                        >
                        { option.name }
                        </option>
                        ) ) }
                </select>

                
        </div>
      </div>
    )
}

export default Filter
