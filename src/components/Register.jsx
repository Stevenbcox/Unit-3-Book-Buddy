import {useState} from "react";
import {registerUser} from "../services/api";

function Register({setToken}) {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const token = await registerUser({
                firstname: userFirstName, lastname: userLastName, email: userEmail, password: userPassword
            });
            setError(null);
            setToken(token);
        } catch (error) {
            setError(error.message);
        }
    }

    return (<>
        <h2>Register for a Library Account</h2>
        {error && <p className='submission_error'>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label className='first_name_form'>
                First Name:
                <input type='text' value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}/>
            </label>
            <label className='last_name_form'>
                Last Name:
                <input type='text' value={userLastName} onChange={(e) => setUserLastName(e.target.value)}/>
            </label>
            <label className='email_form'>
                Email:
                <input type='text' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            </label>
            <label className='password_form'>
                Password:
                <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            </label>
            <label className='submit_button'>
                <button>Submit</button>
            </label>
        </form>
    </>);
}

export default Register;