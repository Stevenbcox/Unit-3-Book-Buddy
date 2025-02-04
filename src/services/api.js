const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/';

export const fetchAllBooks = async () => {
    try{
    const response = await fetch(`${API_URL}/books`);
    const books = await response.json();
    return books.data.books;
} catch (error) {
    console.error("Trouble fetching Books..." , error);
}
};

export const fetchSingleBook = async (id) => {
    try{
    const response = await fetch(`${API_URL}/books/${id}`);
    const book = await response.json();
    return book.data.book;
} catch (error) {
    console.error("Trouble fetching Book..." , error);
}
};

export const addUser = async (user, email, password) => {
    try{
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user, email , password),
    });
    const newUser = await response.json();
    return newUser;
} catch (error) {
    console.error("Trouble adding User..." , error);
}
}