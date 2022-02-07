// redux
import { connect } from 'react-redux';
import { getMovieById } from '../redux/actions';
// hooks
import React, { useEffect } from 'react';
// react-router
import { useParams } from "react-router-dom";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// components
import Movie from './Movie';
// styles
import './css/Movie.css';


const MoviePage = props => {
    let id = useParams().imdbID;
    useEffect(() => {
        props.getMovieById(id);
    }, []);
    return (
        <div className="Movie-container">
            {props.isPending
                ? <FontAwesomeIcon icon={faSpinner} spin size="6x" />
                : <Movie />
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isPending: state.movieInfo.isPending,
        error: state.movieInfo.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieById: (id) => dispatch(getMovieById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);