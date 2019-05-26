import React from 'react';
import ReactDOM from "react-dom";
import Top from './components/top/top';
import './styles.css'
// import {Top} from './components/top';

const Index = () => {
    return (
        <div className="index">
            <h1 className="my-name">
                Joey Saha
            </h1>
            <Top />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));