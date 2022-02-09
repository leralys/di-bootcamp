import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// components
import Button from './layout/Button';
// styles
import './css/Movie.css';


const Movie = (props) => {
    if (props.error !== '') {
        return <h1>Sorry, something went wrong 😓</h1>
    } else {
        return (
            <>
                <h2>{props.movie.Title}</h2>
                <section className="Movie-details">
                    <div>
                        <img className="Movie-details-image"
                            src={props.movie.Poster} />
                    </div>
                    <div className="Movie-details-data">
                        <p><b>Type:</b> {props.movie.Type}</p>
                        <p><b>Genre:</b> {props.movie.Genre}</p>
                        <p><b>Released:</b> {props.movie.Released}</p>
                        <p><b>Rated:</b> {props.movie.Rated}</p>
                        <p><b>IMDB Rating:</b> {props.movie.imdbRating}</p>
                        <p><b>Director:</b> {props.movie.Director}</p>
                        <p><b>Writer:</b> {props.movie.Writer}</p>
                        <p><b>Actors:</b> {props.movie.Actors}</p>
                        <p><b>Awards:</b> {props.movie.Awards}</p>
                    </div>
                </section>
                <section className="Movie-about">
                    <h3>About</h3>
                    <p>{props.movie.Plot}</p>
                    <br />
                    <div className="Movie-about-links">
                        <a href={`https://www.imdb.com/title/${props.movie.imdbID}`} target="_blank" rel="noopener noreferrer">
                            <Button text="View on IMDB" />
                        </a>
                        <Link to={'/'}>Go Back To Search</Link>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieInfo.movie,
        error: state.movieInfo.error
    }
}

export default connect(mapStateToProps)(Movie);