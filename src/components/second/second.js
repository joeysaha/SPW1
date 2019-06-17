import React from 'react';
import './styles.css';

const Second = () => {
    return (  
        <div className="secondSection">
            <h3>
                Here's a picture of a bear!
            </h3>
            <section className="bearPic">
                <img src={randNum()} alt="Sorry, the image you have requested cannot be found because I goofed."></img>
            </section>
        </div>
    );
}

const randNum = () => {
    return `https://placebear.com/${Math.round(Math.random()*1000)}/${Math.round(Math.random()*1000)}`;
}



export default Second;