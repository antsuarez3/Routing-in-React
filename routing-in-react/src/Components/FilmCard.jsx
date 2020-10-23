import React from 'react';
import {Link } from "react-router-dom";

const FilmCard = props => {
    return (
        <div className="card m-4 shadow" style={{ width: "18rem"}}>
            <div className="card-body bg-light border border-info">
                <h2 className="card-title">{props.film.title}</h2>
                {/* <p className="card-text">{props.film.description}</p> */}
                <Link to={`/films/${props.film.id}`}>
                    <button className="btn btn-small btn-dark">See More</button>
                </Link>
            </div>
        </div >
    )
}

export default FilmCard