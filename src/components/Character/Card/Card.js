import React from 'react'
import { Link } from "react-router-dom";
import "./Card.css"

const Card = (props) => {
    
    const { name, titles, slug, house, image, alive, spouse, gender  } = props.character;
    
    return (
        <div className="card card-shadow">
            <img src={image} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Title: {titles.length >0 ? titles[0] : "Unknown"}
                </p>
                <p className="card-text">
                    Spouse: {spouse.length>0 ? spouse[0]: "Unknown" }
                </p>
                    
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">House: {house}</li>
                <li className="list-group-item">Gender: {gender}</li>
            </ul>
            <div className="card-body">
                <Link to={`/characters/${slug}`} className="card-link">Details</Link>
                <Link to={`/houses/${house}`} className="card-link">House</Link>
            </div>
            <div className={`card-footer  ${alive ? "card-alive" : "card-dead"}`}>
                <small>{alive? "Alive": "Dead"}</small>
            </div>
        </div>
    )
}

export default Card
