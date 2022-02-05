// redux
import { connect } from 'react-redux';
// redux
import { getMovieById } from '../redux/actions';
// react-router
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
// components
import Movie from './Movie';


const MoviePage = props => {
    let id = useParams().imdbID;
    useEffect(() => {
        props.getMovieById(id);
    }, []);
    return (
        <Movie />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: (id) => dispatch(getMovieById(id))
    }
}
export default connect(null, mapDispatchToProps)(MoviePage);
