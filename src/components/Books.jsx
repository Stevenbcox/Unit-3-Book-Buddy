/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllBooks} from '../services/api';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const fetchedBooks = await fetchAllBooks();
            setBooks(fetchedBooks);
        }

        getBooks();
    }, []);

    return (<div>
        <h1>Books</h1>
        <ul>
            {books.map((book) => (<li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>))}
        </ul>
    </div>);
}