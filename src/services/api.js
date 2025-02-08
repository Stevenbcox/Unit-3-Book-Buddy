const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export async function fetchAllBooks() {
    try {
        const response = await fetch(`${API_URL}/books`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const temp = await response.json();
        console.log('Fetched books:', temp.books);
        return temp.books;
    } catch (e) {
        console.error("Unable to gather books.", e);
    }
}

export const fetchSingleBook = async (bookId) => {
    try {
        const response = await fetch(`${API_URL}/books/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result; // Ensure the entire result is returned
    } catch (error) {
        console.error(error);
    }
};

export async function userRegistration(userObj) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        const result = await response.json();
        return result.token;
    } catch (error) {
        console.error(error);
    }
}

export const fetchAccountDetails = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const account = await response.json();
        return account.data.user;
    } catch (error) {
        console.error(error);
    }
};

export async function userLogin(userObj) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        const result = await response.json();
        return result.token;
    } catch (error) {
        console.error(error);
    }
}

export async function updateBook(token, bookId, availability) {
    try {
        const response = await fetch(`${API_URL}/books/${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                available: `${availability}`,
            })
        });
        const result = await response.json();
        return result.book;
    } catch (error) {
        console.error(error);
    }
}