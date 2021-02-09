import React from 'react';
import ReactDOM from 'react-dom';
import "../style/body2.css";

function Body2() {
    return <div className="container2">
        <div className="personal">
            <h2>~ Personal Information ~</h2>
            <p>work hard to leave a Benchmark..</p>
            <p>never give Up without atleast one try..</p>
            <p>I am a Loser , But i always try to overcome the task that made me a Loser..</p>
        </div>
        <div className="skill">
            <h2>~ Skill ~</h2>
            <ul type="bullet">
                <li>Web Developement</li>
                <li>Analyst</li>
                <li>Gamer</li>
            </ul>
        </div>
    </div>
}

export default Body2;