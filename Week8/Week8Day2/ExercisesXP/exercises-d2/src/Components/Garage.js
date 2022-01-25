import React, { Component } from 'react';

const Garage = props => {
    const { size } = props;
    return (
        <h1>Who lives in my {size} garage?</h1>
    )
}

export default Garage;