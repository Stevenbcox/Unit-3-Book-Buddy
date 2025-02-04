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

export async function userRegistration(userObj) {
    try{
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        const result = await response.json();
        return result.token;
    } catch(error){
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

    } catch(error) {
        console.error(error)
    }
}