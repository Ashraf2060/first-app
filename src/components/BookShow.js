import React from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, deletedBook,onEdit }) => {
    const [showEdit, setShowEdit] = useState(false)
    
    let content = <h3>{book.title}</h3>
    const handleSubmit = () => {
        setShowEdit(false)
    }
    if (showEdit) {
        content =<BookEdit book={book} onEdit={onEdit} handleSubmit={handleSubmit} />
    }
   

    return (
        <div className='book-show'>
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{ content}</div>
            <div className='actions'>
                <button onClick={() => {
                    setShowEdit(!showEdit)
                }} className='edit'>Edit</button>
                <button className='delete' onClick={() => {
                    deletedBook(book.id)
                }}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;
