import { connect } from 'react-redux';
// components
import Header from './layout/Header';
import SearchContainer from './SearchContainer';
import MovieGrid from './layout/MovieGrid';
import Wrapper from './layout/Wrapper';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Home = (props) => {
    return (
        <div className="App">
            <Header />
            <SearchContainer />
            {props.isPending &&
                <Wrapper>
                    <FontAwesomeIcon icon={faSpinner} spin size="6x" />
                </Wrapper>
            }
            {props.data.length !== 0 &&
                <MovieGrid arr={props.data} />
            }
            {props.error !== '' &&
                <Wrapper>
                    <h1>Sorry, something went wrong</h1>
                </Wrapper>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchText: state.searchText,
        data: state.data,
        isPending: state.isPending,
        error: state.error
    }
}

export default connect(mapStateToProps)(Home);
// export default Home;
// https://www.omdbapi.com/?apikey=${APIKey}&s=${text}