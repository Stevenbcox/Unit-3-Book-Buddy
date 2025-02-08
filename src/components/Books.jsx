import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllBooks} from '../services/api';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const fetchedBooks = await fetchAllBooks();
            setBooks(fetchedBooks);
        }

        getBooks();
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;