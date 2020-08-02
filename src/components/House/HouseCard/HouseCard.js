import React from 'react'

import { Link } from "react-router-dom"

import houseImagePlaceholder from "../../../img/placeholder_house_flag.jpg"

import "./HouseCard.css"

const HouseCard = (props) => {

    const { name, logoURL:image, sigil, words, region} = props.house

    return (
        <div className="card card-shadow">
            <img src={image? image: houseImagePlaceholder} className="card-img-top .house-img" alt={name} />
            
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Sigil: {sigil ? sigil : "Unknown"}
                </p>
                <p className="card-text">
                words: {words ? words: "Unknown" }
                </p>
                <p className="card-text">
                region: {region.length> 0 ? region.join(", "): "Unknown" }
                </p>
            </div>

            <div className="card-body">
                <Link to={`/houses/${name}`} className="card-link">Details</Link>
            </div>

        </div>
    )
}

export default HouseCard
