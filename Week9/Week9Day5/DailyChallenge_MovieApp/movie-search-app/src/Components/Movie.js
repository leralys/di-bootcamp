import { connect } from 'react-redux';
import ContentWrapper from './layout/ContentWrapper'
// import { Link } from "react-router-dom";
// components
// import Button from './layout/Button';
// styles
// import './css/MovieCard.css';

const Movie = (props) => {
    return (
        <div>
            <ContentWrapper>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ padding: '1rem 2rem' }}>
                    <p>{props.movie.Title}</p>
                    <p>{props.movie.Director}</p>
                    <p>{props.movie.Type}</p>
                    <p>{props.movie.Genre}</p>
                    <p>{props.movie.imdbRating}</p>
                    <p>{props.movie.Plot}</p>
                    <p>{props.movie.Awards}</p>
                    <p>{props.movie.Country}</p>
                    <p>{props.movie.Actors}</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </ContentWrapper>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieInfo.movie
    }
}

export default connect(mapStateToProps)(Movie);