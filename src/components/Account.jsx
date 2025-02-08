import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {fetchAccountDetails} from '../services/api';

function Account({token, setToken}) {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function getAccountDetails() {
            try {
                if (token) {
                    const accountDetails = await fetchAccountDetails(token);
                    console.log("Account details:", accountDetails); // Log the response to debug
                    setAccount(accountDetails);
                }
            } catch (error) {
                console.error("Unable to gather account info.", error);
            }
        }

        if (token) {
            getAccountDetails();
        }
    }, [token]);

    const handleLogout = () => {
        setToken(null);
    };

    if (!token) {
        return <div>Please log in to view your account.</div>;
    }

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Details</h2>
            <p><strong>First Name:</strong> {account.firstname}</p>
            <p><strong>Last Name:</strong> {account.lastname}</p>
            <p><strong>Email:</strong> {account.email}</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

Account.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func.isRequired,
};

export default Account;