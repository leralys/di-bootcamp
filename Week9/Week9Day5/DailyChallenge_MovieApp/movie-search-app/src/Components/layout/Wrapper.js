import React, { Component } from 'react';
import './css/Wrapper.css';

class Wrapper extends Component {
    render() {
        return <div className='Wrapper'>{this.props.children}</div>
    }
}

export default Wrapper;