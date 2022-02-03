// components
import Button from './layout/Button';
import './css/MovieCard.css';
// <i class="fas fa-angle-right

const MovieCard = (props) => {
    console.log(props.arr)
    return (
        <>
            {
                props.arr.map(el => {
                    return <div key={el.imdbID} className="MovieCard">
                        <img className="MovieCard-image" src={el.Poster} />
                        <div className="MovieCard-description">
                            <h4>{el.Title}</h4>
                            <p>{el.Year}</p>
                            <Button text="Details &#8680;" />
                        </div>

                    </div>
                })
            }
        </>
    )
}

export default MovieCard;