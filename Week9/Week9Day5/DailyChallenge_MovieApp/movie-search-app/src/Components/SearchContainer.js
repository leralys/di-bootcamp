import React, { Component } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// components
import Button from './layout/Button'
import Wrapper from './layout/Wrapper';
// styles

// make css file for these styles
const SearchContainer = (props) => {
    return (
        <Wrapper>
            <div className="SearchContainer" style={{ padding: '1rem' }}>
                <div className="SearchContainer-header" style={{ background: '#f8f9fa' }}>
                    <span><FontAwesomeIcon icon={faSearch} size="4x" style={{ color: '#282c34' }} /></span>
                    <span style={{ fontSize: '2rem', marginLeft: '1rem' }}>Search for a movie ,TV series ..</span>
                </div>
                <input onChange={props.handleChange} handleKeyPress={props.handleKeyPress} type="text"
                    style={{ width: '50%', height: '2rem', borderRadius: '10px', marginTop: '0.5rem' }} />
                <br />
                <Button text="Search" handleClick={props.handleClick} />
            </div>
        </Wrapper >
    )
}

export default SearchContainer;


