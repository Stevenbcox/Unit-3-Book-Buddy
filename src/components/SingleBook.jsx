import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchSingleBook} from '../services/api';

function SingleBook() {
    const [book, setBook] = useState(null);
    const {bookid} = useParams();

    useEffect(() => {
        async function getBook() {
            const fetchedBook = await fetchSingleBook(bookid);
            setBook(fetchedBook);
        }

        getBook();
    }, [bookid]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <img src={book.coverimage} alt={`${book.title} cover`}/>
            <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default SingleBook;