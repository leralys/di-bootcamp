import React, { Component } from 'react';
import 'tachyons';
import './Quote.css';
import quotes from '../DB/QuotesDatabase';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            quote: '',
            color: '',
            fade: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.randomRGB = this.randomRGB.bind(this);
        this.reStartAnimation = this.reStartAnimation.bind(this);
    }
    randomRGB() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = `rgb(${r}, ${g}, ${b})`;
        return rgb;
    };
    handleClick() {
        let randomN = Math.floor(Math.random() * quotes.length);
        let randomColor = this.randomRGB();
        this.setState({
            quote: quotes[randomN].quote,
            author: quotes[randomN].author,
            color: randomColor,
            fade: true
        });
    }
    reStartAnimation() {
        this.setState({ fade: false });
    }
    componentDidMount() {
        this.handleClick();
    }
    render() {
        return (
            <main className='Quote-page' style={{ backgroundColor: `${this.state.color}` }}>
                <div className='Quote-container bg-white br3 pa3'>
                    <div className={this.state.fade ? 'fadeIn' : ''}>
                        <h1 className='tl ma0'>
                            <q>{this.state.quote}</q>
                        </h1>
                        <p className='fw7 i'>
                            -{this.state.author === '' ? 'Unknown' : this.state.author}-
                        </p>
                    </div>
                    <br />
                    <button onClick={this.handleClick} onAnimationEnd={this.reStartAnimation}
                        className='Quote-button br2 pa2 white fw7'
                        style={{ backgroundColor: `${this.state.color}` }}>New quote
                    </button>
                </div>
            </main >
        );
    }
}


export default Quote;