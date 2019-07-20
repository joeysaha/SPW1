import React from 'react';
import ReactDOM from "react-dom";
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import './styles.css';
import './wickedcss.min.css';

/**
 * Handle viewing first, second, third using state instead of using the 3 functions you wrote...
 * Room to DRY up the code too...
 */

const Index = () => {
    return (
        <div className="index">
            <div className="cool heartbeat">
                THE COOLEST THING IN THE WORLLLLDDDDDDD.....?!?!?
            </div>
            <h1 className="my-name spinner">
                Joey Saha
            </h1>
            <div className="show-buttons">
                <button className="first-button btn btn-secondary" onClick={showFirstContent}>
                    First
                </button>
                <button className="second-button btn btn-secondary" onClick={showSecondContent}>
                    Second
                </button>
                <button className="third-button btn btn-secondary" onClick={showThirdContent}>
                    Third
                </button>
            </div>
            <div className="show-first-stuff">
                <First />
            </div>
            <div className="show-second-stuff">
                <Second />
            </div>
            <div className="show-third-stuff">
                <Third />
            </div>
        </div>
    );
};

const showFirstContent = () => {
    let theDiv = document.querySelector('.show-first-stuff');
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
    let theDiv = document.querySelector('.show-second-stuff');
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

const showThirdContent = () => {
    let theDiv = document.querySelector('.show-third-stuff');
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