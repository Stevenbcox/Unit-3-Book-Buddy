import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {userLogin} from '../services/api';

function Login({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await userLogin({email, password});
            if (token) {
                setToken(token);
                navigate('/users/login');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError(err.message || 'An error occurred during login');
            console.error("Login failed:", err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don&apos;t have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;