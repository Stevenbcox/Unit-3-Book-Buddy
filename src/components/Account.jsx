import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fetchAccountDetails} from '../services/api';

function Account({token}) {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function getAccountDetails() {
            if (token) {
                const fetchedAccount = await fetchAccountDetails(token);
                setAccount(fetchedAccount);
            }
        }

        getAccountDetails();
    }, [token]);

    if (!token) {
        return <div>Please log in or create an account to view your details.</div>;
    }

    if (!account) {
        return <div>Loading...</div>;
    }

    return (<div>
        <h1>Account Details</h1>
        <p>Name: {account.name}</p>
        <p>Email: {account.email}</p>
        {/* Add more account details as needed */}
    </div>);
}

Account.propTypes = {
    token: PropTypes.string.isRequired,
};

export default Account;