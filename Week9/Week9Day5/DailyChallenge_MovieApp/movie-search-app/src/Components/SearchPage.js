import { connect } from 'react-redux';
// components
import Search from './Search';
import MovieGrid from './MovieGrid';
import ContentWrapper from './layout/ContentWrapper';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SearchPage = (props) => {
    return (
        <div className="App">
            <Search />
            {props.isPending &&
                <ContentWrapper>
                    <FontAwesomeIcon icon={faSpinner} spin size="6x" />
                </ContentWrapper>
            }
            {props.data.length > 0 &&
                <MovieGrid arr={props.data} />
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         searchText: state.searchText,
//         data: state.data,
//         isPending: state.isPending,
//         error: state.error
//     }
// }

const mapStateToProps = (state) => {
    return {
        searchText: state.movies.searchText,
        data: state.movies.data,
        isPending: state.movies.isPending,
        error: state.movies.error
    }
}

export default connect(mapStateToProps)(SearchPage);