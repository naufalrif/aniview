import React from "react";

import './App.css'
import searchBtn from './search.svg'

const App = () => {
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

            <div className="container">

            </div>
        </div>
    )
}

export default App;