import React from 'react';
import ReactDOM from "react-dom";
import First from './components/first/first';
import './styles.css';
import './wickedcss.min.css';
// import {Top} from './components/top';

const Index = () => {
    return (
        <div className="index">
            <div className="cool heartbeat">
                THE COOLEST THING IN THE WORLLLLDDDDDDD.....?!?!?
            </div>
            <h1 className="my-name spinner">
                Joey Saha
            </h1>
            <button className="firstButton" onClick={showContent}>
                First
            </button>
            <div className="showFirstStuff">
                <First />
            </div>
        </div>
    );
};

const showContent = () => {
    let theDiv = document.querySelector('.showFirstStuff');
    if (theDiv.style.display) {
        if (theDiv.style.display === "none") {
            theDiv.style.display = "block";
        } else {
            theDiv.style.display = "none";
        }
    } else {
        theDiv.style.display = "block";
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));