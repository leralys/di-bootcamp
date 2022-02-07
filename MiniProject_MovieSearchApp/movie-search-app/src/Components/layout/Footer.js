import React, { Component } from 'react';
// styles
import './css/Footer.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="Footer">Using
            <span>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" id="react-footer">
                    <FontAwesomeIcon icon={faReact} />ReactJS
                </a>
            </span>
            &
            <span>
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" id="redux">
                    <img src="https://www.svgrepo.com/show/303557/redux-logo.svg" width="16" height="16" />Redux
                </a>
            </span>
            integrated with external movies data
            <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb API</a>
        </div>
    )
}

export default Footer



// <span><FontAwesomeIcon icon={faSearch} size="2x" id="search-icon"
// style={{ marginRight: '1rem' }} /></span>