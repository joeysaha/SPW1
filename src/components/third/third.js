import React from 'react';
import './styles.css';

class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1,
            imageCount: 3
        }
    }

    updateIndex(i) {
        this.setState({ currentIndex: i });
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
            </React.Fragment>
        )
    }
}

const randKitten = (i) => {
    if (!i) {
        let i = 300;
    }
    let secondNum = Math.round(i * (Math.random() / 4 + .875));
    return `https://placekitten.com/${i}/${secondNum}`;
}

export default Third;
 


