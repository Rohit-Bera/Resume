import React from 'react';
import ReactDOM from 'react-dom';
import profile from "./profile.jpg"; 
import "../style/heading.css";

function Head() {

    return <div className="head">
        <div className="image">
        <img src={profile} alt="profile"></img>
        </div>
        <div className="heading">
            <h1>Rohit</h1>
            <h1>Bera</h1>
        </div>
    </div>
}

export default Head;