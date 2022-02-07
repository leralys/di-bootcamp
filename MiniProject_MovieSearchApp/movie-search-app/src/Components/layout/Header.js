import { connect } from 'react-redux';
import { clearState } from '../../redux/actions';
import { Link } from "react-router-dom";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
// styles
import './css/Header.css'

const Header = (props) => {
    return (
        <div className="Header">
            <span className="Header-logo"><Link to={'/'} onClick={props.clearState}>MovieSeriesInfo</Link></span>
            <div>
                <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faImdb} size="4x" id="imdb" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" id="react-footer">
                    <FontAwesomeIcon icon={faReact} size="4x" id="react" />
                </a>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearState: () => dispatch(clearState())
    }
}
export default connect(null, mapDispatchToProps)(Header);
