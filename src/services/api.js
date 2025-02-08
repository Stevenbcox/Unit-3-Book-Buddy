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
        return result.book; // Ensure the book object is returned
    } catch (error) {
        console.error(error);
    }
};

export async function registerUser(userObj) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.token;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
}

// src/services/api.js

export const fetchAccountDetails = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (!result.data || !result.data.user) {
            throw new Error("Invalid response format");
        }
        return result.data.user;
    } catch (error) {
        console.error("Unable to fetch account details:", error);
        throw error;
    }
};


// src/services/api.js

export async function userLogin(userObj) {
    if (!userObj.email || !userObj.password) {
        throw new Error("Please supply both an email and password");
    }

    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.token;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

