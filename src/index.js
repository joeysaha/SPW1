import React from 'react';
import ReactDOM from "react-dom";
import Top from './components/top/top';

const Index = () => {
    return (
        <div>
            <h1>
                Joey Saha
            </h1>
            <Top />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));