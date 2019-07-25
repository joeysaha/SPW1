import React from 'react';
import './styles.css';
// import './changer';

// class Third extends React.Component {
//     constructor(props) {
//         super(props);
//         this.slideIndex = 1;
//         this.slides = document.getElementsByClassName("mySlides");
//         this.dots = document.getElementsByClassName("dot");
//         this.showSlides(this.slideIndex);
//     }
    
//     showSlides(n) {
        
//         if (n > this.slides.length) {
//             this.slideIndex = 1;
//         }
//         if (n < 1) {
//             this.slideIndex = this.slides.length;
//         }
//         for (var i = 0; i < this.slides.length; i++) {
//             this.slides[i].style.display = "none";
//             this.slides[i].hidden = false;
//         }
//         for (i = 0; i < this.dots.length; i++) {
//             this.dots[i].className = this.dots[i].className.replace(" active", "");
//         }
//         this.slides[this.slideIndex - 1].style.display = "block";
//         this.dots[this.slideIndex - 1].className += " active";
//     }
    
//     plusSlides(n) {
//         this.showSlides(this.slideIndex += n);
//     };

//     currentSlide(n) {
//         this.showSlides(this.slideIndex = n);
//     };
    
    
//     render() { 
//         return (  
//             <React.Fragment>
//                 <div className="slideshow-container">
//                     <div className="mySlides fade">
//                         <div className="numbertext">1 / 3</div>
//                         <img className="imageLook" src={randKitten()}></img>
//                         <div className="text">Caption Text</div>
//                     </div>
//                     <div className="mySlides fade">
//                         <div className="numbertext">2 / 3</div>
//                         <img className="imageLook" src={randKitten()}></img>
//                         <div className="text">Caption Text</div>
//                     </div>
//                     <div className="mySlides fade">
//                         <div className="numbertext">3 / 3</div>
//                         <img className="imageLook" src={randKitten()}></img>
//                         <div className="text">Caption Text</div>
//                     </div>
//                     <a className="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</a>
//                     <a className="next" onClick={()=>this.plusSlides(1)}>&#10095;</a>
//                 </div>
//                 <div className="dotContainer">
//                     <span className="dot" onClick={()=>this.currentSlide(1)}></span>
//                     <span className="dot" onClick={()=>this.currentSlide(2)}></span>
//                     <span className="dot" onClick={()=>this.currentSlide(3)}></span>
//                 </div>
                
//             </React.Fragment>
//         );  
//     }

    

// }
 

const randKitten = (i) => {
    if(!i) {
        let i = 300;
    }
    let secondNum = Math.round(i * (Math.random()/4 + .875));
    return `https://placekitten.com/${i}/${secondNum}`;
}


class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1,
            imageCount: 3
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(i) {
        this.setState({ currentIndex: i });
    }

    generateButtons(num) {
        const buttons = [];
        for (let i = 0; i < num; i++) {
            buttons.push(<span className="dot" onClick={()=>this.updateIndex(i)}></span>)
        }
        return buttons;
    }

    changeIndex(indexMod) {
        if(indexMod === 1) {
            if(this.state.currentIndex === this.state.imageCount) {
                this.setState({ currentIndex: 1 });
            } else {
                this.setState({ currentIndex: (this.state.currentIndex + 1) });
            }
        } else {
            if(this.state.currentIndex === 1) {
                this.setState({ currentIndex: this.state.imageCount });
            } else {
                this.setState({ currentIndex: (this.state.currentIndex - 1) });
            }
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className = "slideshow-container">
                    <div className="mySlides">
                        <div className="numbertext">{this.state.currentIndex} / {this.state.imageCount}</div>
                        <img className="imageLook" src={randKitten(700)}></img>
                        <div className="text">Caption Text</div>
                    </div>
                    <a className="prev" onClick={()=>this.changeIndex(-1)}>&#10094;</a>
                    <a className="next" onClick={()=>this.changeIndex(1)}>&#10095;</a>
                </div>
                <div className="dotContainer">
                    {this.generateButtons()}
                </div>
            </React.Fragment>
        )
    }
}










export default Third;
 


