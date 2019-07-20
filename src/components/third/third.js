import React from 'react';
import './styles.css';
// import './changer';

class Third extends React.Component {
    constructor(props) {
        super(props);
        this.slideIndex = 1;
        this.slides = document.getElementsByClassName("mySlides");
        this.dots = document.getElementsByClassName("dot");
        showSlides(slideIndex);
    }



    plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].hidden = false;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    
    
    render() { 
        return (  
            <React.Fragment>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img className="imageLook" src={randKitten()}></img>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img className="imageLook" src={randKitten()}></img>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img className="imageLook" src={randKitten()}></img>
                        <div className="text">Caption Text</div>
                    </div>
                    <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>
                </div>
                <div className="dotContainer">
                    <span className="dot" onClick={()=>currentSlide(1)}></span>
                    <span className="dot" onClick={()=>currentSlide(2)}></span>
                    <span className="dot" onClick={()=>currentSlide(3)}></span>
                </div>
                
            </React.Fragment>
        );  
    }

    

}
 

const randKitten = () => {
    return `https://placekitten.com/${Math.round(Math.random()*1000)}/${Math.round(Math.random()*1000)}`;
}











export default Third;
 


