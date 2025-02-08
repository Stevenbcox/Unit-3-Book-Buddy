/* TODO - add your code to create a functional React component that renders a login form */

import {useState} from 'react';
import {userLogin} from '../services/api';
import {useNavigate} from 'react-router-dom';

function Login({setToken}) {
    const [login, setLogin] = useState({email: '', password: ''});
    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setLogin((prevData) => ({...prevData, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = await userLogin(login);
        if (token) {
            setToken(token);
            navigate('/');
        } else {
            console.error('Login failed');
        }
    }

    return (<form onSubmit={handleSubmit}>
        <label>
            Email:
            <input
                required
                name="email"
                value={login.email}
                type="email"
                onChange={handleChange}
            />
        </label>
        <label>
            Password:
            <input
                required
                name="password"
                value={login.password}
                type="password"
                onChange={handleChange}
            />
        </label>
        <button type="submit">Login</button>
    </form>);
}

export default Login;