import React from 'react';
import './styles.css';

const Second = () => {
    return (  
        <div className="second-section fadeIn">
            <h3>
                Here's a picture of a bear!
            </h3>
            <section className="bear-pic wiggle">
                <img src={randBear()} alt="Sorry, the image you have requested cannot be found because I goofed."></img>
            </section>
        </div>
    );
}

const randBear = () => {
    return `https://placebear.com/${Math.round(Math.random()*1000)}/${Math.round(Math.random()*1000)}`;
}



export default Second;