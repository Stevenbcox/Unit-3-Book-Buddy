/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from 'react'

default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
        <h2>Register</h2>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' required/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' required/>
        <button type='submit'>Register</button>
        </form>
    )
}

export default Register

