import PropTypes from 'prop-types';

function Account({token}) {
    if (!token) {
        return <div>Please log in to view your account.</div>;
    }

    // Render account details
    return <div>Account details here...</div>;
}

Account.propTypes = {
    token: PropTypes.string,
};

export default Account;