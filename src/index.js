import React from 'react';
import ReactDOM from "react-dom";
import First from './components/first/first';
import Second from './components/second/second';
import './styles.css';
import './wickedcss.min.css';

const Index = () => {
    return (
        <div className="index">
            <div className="cool heartbeat">
                THE COOLEST THING IN THE WORLLLLDDDDDDD.....?!?!?
            </div>
            <h1 className="myName spinner">
                Joey Saha
            </h1>
            <button className="firstButton btn btn-primary" onClick={showFirstContent}>
                First
            </button>
            <button className="secondButton btn btn-secondary" onClick={showSecondContent}>
                Second
            </button>
            <div className="showFirstStuff">
                <First />
            </div>
            <div className="showSecondStuff">
                <Second />
            </div>
        </div>
    );
};

const showFirstContent = () => {
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

const showSecondContent = () => {
    let theDiv = document.querySelector('.showSecondStuff');
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