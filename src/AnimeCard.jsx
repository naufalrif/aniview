import React from "react";

const AnimeCard = ({anime}) => {
    return (
        <div className="movie">
            <div>
                <p>{anime._id}</p>
            </div>
            <div>
                <img src={anime.image}/>
            </div>
            <div>
                <h3>{anime.title}</h3>
            </div>
        </div>
    )
}

export default AnimeCard;