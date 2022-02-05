// components
import ContentWrapper from './layout/ContentWrapper';
import MovieCard from './MovieCard';
// styles
import './css/MovieGrid.css'

const MovieGrid = () => {
    return (
        <ContentWrapper>
            <div className="MovieGrid">
                <MovieCard />
            </div>
        </ContentWrapper >
    )
}

export default MovieGrid;