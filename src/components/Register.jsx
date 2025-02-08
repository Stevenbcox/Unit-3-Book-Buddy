/* TODO - add your code to create a functional React component that renders a registration form */
import {useState} from 'react'
import {userRegistration} from '../services/api.js'
import {useNavigate} from "react-router-dom";

function Register({setToken}) {
    const [register, setRegister] = useState({
        firstname: '', lastname: '', email: '', password: ''
    })

    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setRegister((prevData) => ({...prevData, [name]: value}))
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setToken(await userRegistration(register))
        navigate('/')
    }

    return (<form onSubmit={handleSubmit}>
        <label> First name: <input required name="firstname" value={register.firstname} type="text"
                                   onChange={handleChange}/></label>
        <label> Last Name: <input required name="lastname" value={register.lastname} type="text"
                                  onChange={handleChange}/></label>
        <label> Email: <input required name="email" value={register.email} type="text"
                              onChange={handleChange}/></label>
        <label> Password: <input required name="password" value={register.password} type="text"
                                 onChange={handleChange}/></label>
        <button type="submit">submit</button>
    </form>)
}

export default Register

