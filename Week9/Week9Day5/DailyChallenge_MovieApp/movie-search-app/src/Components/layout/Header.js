import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    // make a css file fot these styles
    return (
        <div className="Header" style={{
            background: '#282c34',
            height: '100px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', padding: '0 3rem'
        }}>
            <span className="Logo" style={{ color: 'white', fontSize: '2rem' }}>MovieSeriesInfo</span>
            <div>
                <FontAwesomeIcon icon={faImdb} size="4x" style={{ color: '#F5DE50', marginRight: '1rem' }} />
                <FontAwesomeIcon icon={faReact} size="4x" style={{ color: '#61dafb' }} />
            </div>
        </div>
    )
}
export default Header;
