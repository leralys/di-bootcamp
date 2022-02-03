// components
import Wrapper from './Wrapper';
import MovieCard from '../MovieCard';
// styles
import './css/MovieGrid.css'

const MovieGrid = (props) => {
    return (
        <Wrapper>
            <div className="MovieGrid">
                <MovieCard arr={props.arr} />
            </div>
        </Wrapper >
    )
}
export default MovieGrid;