import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books,deletedBook,onEdit }) => {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book } deletedBook={deletedBook} onEdit={onEdit} />
    })
    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    );
}

export default BookList;
