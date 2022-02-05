import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
// styles
import './css/Header.css'

const Header = () => {
    return (
        <div className="Header">
            <span className="Header-logo">MovieSeriesInfo</span>
            <div>
                <FontAwesomeIcon icon={faImdb} size="4x" id="imdb" />
                <FontAwesomeIcon icon={faReact} size="4x" id="react" />
            </div>
        </div>
    )
}
export default Header;
