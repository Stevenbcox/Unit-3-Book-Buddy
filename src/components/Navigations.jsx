import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigations({token}) {
    return (<nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            {token ? (<li><Link to="/my-account">My Account</Link></li>) : (<li><Link to="/login">Login</Link></li>)}
        </ul>
    </nav>);
}

Navigations.propTypes = {
    token: PropTypes.string,
};

export default Navigations;