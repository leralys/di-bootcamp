import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// components
import Button from './layout/Button';
// styles
import './css/MovieCard.css';

const MovieCard = (props) => {
    return (
        <>
            {
                props.data.map(el => {
                    return <div key={el.imdbID} className="MovieCard">
                        <img className="MovieCard-image" src={el.Poster} alt={el.Title} />
                        <div className="MovieCard-description">
                            <h4>{el.Title}</h4>
                            <p>{el.Year}</p>
                            <Link to={`/movies/${el.imdbID}`}><Button text="Details &#8680;" /></Link>
                        </div>
                    </div>
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.movies.data,
    }
}

export default connect(mapStateToProps)(MovieCard);