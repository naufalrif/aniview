import React from "react";
import { useEffect, useState } from "react";

import './App.css'
import searchBtn from './search.svg'
import AnimeCard from './AnimeCard'


 const API_URL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10';
 const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'caba5fe668msh1c737d945683b4ep160740jsn54377fd822d6',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
 };

const App = () => {

    const [anime, setAnime] = useState([])
    const searchTitle = async (title) => {
        const response = await fetch(`${API_URL}&search=${title}`, options);
        const result = await response.json()

        setAnime(result.data)
        console.log(result.data)
    }


    useEffect(() => {
        searchTitle('one piece')
    },[])

    return (
        <div className="app">
            <h1>Aniview</h1>

            <div className="search">
                <input  
                    placeholder="Search anime"
                    value=''
                    onChange={() => {}}
                />

                <img 
                    src={searchBtn}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                anime?.length > 0
                    ? (
                        <div className="container">
                            {anime.map((anime) => (
                                <AnimeCard anime={anime}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No anime found</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default App;