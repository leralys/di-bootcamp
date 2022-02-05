import { connect } from 'react-redux';
// components
import Search from './Search';
import MovieGrid from './MovieGrid';
import ContentWrapper from './layout/ContentWrapper';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SearchPage = (props) => {
    // add here error handling
    return (
        <div className="App">
            <Search />
            {props.isPending
                ? <ContentWrapper>
                    <FontAwesomeIcon icon={faSpinner} spin size="6x" />
                </ContentWrapper>
                : <MovieGrid />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isPending: state.movies.isPending,
        error: state.movies.error
    }
}

export default connect(mapStateToProps)(SearchPage);