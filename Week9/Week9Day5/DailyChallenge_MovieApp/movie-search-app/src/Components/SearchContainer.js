// redux
import { connect } from 'react-redux';
import { setSearchText, findMovies } from '../redux/actions';
// components
import Button from './layout/Button'
import Wrapper from './layout/Wrapper';
// styles
import './css/SearchContainer.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = (props) => {
    return (
        <Wrapper>
            <div className="SearchContainer">
                <div className="SearchContainer-header">
                    <span><FontAwesomeIcon icon={faSearch} size="2x" id="search-icon"
                        style={{ marginRight: '1rem' }} /></span>
                    <span>Search for a movie, TV series ..</span>
                </div>
                <input onChange={props.handleChange} onKeyPress={props.handleKeyPress} type="text" />
                <br />
                <Button text="Search" handleClick={props.handleClick} />
            </div>
        </Wrapper >
    )
}


const mapDispatchToProps = dispatch => {
    return {
        handleChange: (e) => dispatch(setSearchText(e.target.value)),
        handleClick: () => dispatch(findMovies()),
        handleKeyPress: (e) => {
            if (e.key === 'Enter') {
                dispatch(findMovies());
            }
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchContainer)
