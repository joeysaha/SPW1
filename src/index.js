import React from 'react';
import ReactDOM from "react-dom";
import Top from './components/top/top';
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
            {/* <button className="topButton" onClick={showContent()} >
                Top
            </button> */}
            <div className="showTopStuff">
                <Top />
            </div>
        </div>
    );
};

function showContent() {
    var showDiv = document.getElementById("showTopStuff");
    if (showDiv.style.display === "none") {
        showDiv.style.display = "block";
    } else {
        showDiv.style.display = "none";
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));