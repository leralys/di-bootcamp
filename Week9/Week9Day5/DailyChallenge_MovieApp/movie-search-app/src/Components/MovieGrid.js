import { connect } from 'react-redux';
// components
import ContentWrapper from './layout/ContentWrapper';
import MovieCard from './MovieCard';
// styles
import './css/MovieGrid.css'

const MovieGrid = (props) => {
    if (props.data) {
        return (
            <ContentWrapper>
                <div className="MovieGrid">
                    <MovieCard />
                </div>
            </ContentWrapper >
        )
    } else {
        return (
            <ContentWrapper>
                <h3 style={{ textAlign: 'left', fontWeight: '500' }}>
                    Sorry, something went wrong 😣. Try again?
                </h3>
            </ContentWrapper >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies.data
    }
}

export default connect(mapStateToProps)(MovieGrid);