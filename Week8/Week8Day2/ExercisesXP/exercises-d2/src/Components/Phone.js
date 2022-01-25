import React, { Component } from 'react';

class Phone extends Component {
    constructor(props) {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
        this.changeColor = this.changeColor.bind(this);
    };
    changeColor(e){
        let phone = {...this.state };
        phone.color='blue';
        this.setState({ color: phone.color})
    }
    render() {
        return(
            <div>
                {
                    Object.entries(this.state).map((el, index)=> {
                        return <div key={index}>
                            <p>{`${el[0]} : ${el[1]}`}</p>
                        </div>
                    })
                }
                <button onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}

export default Phone;
