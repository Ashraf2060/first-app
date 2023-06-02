import React, { useState } from 'react';


const BookEdit = ({book,onEdit,handleSubmit}) => {
    const [changTiltle, setChangeTitle] = useState(book.title)
    
    const handleSubmitForm = (event) => {
        event.preventDefault()
        
        onEdit(book.id, changTiltle)
        handleSubmit()
    }
    return (
        <div>
            <form className='book-edit' onSubmit={handleSubmitForm}>
            <label>Title</label>
            <input className='input' value={changTiltle} onChange={(event) => {
                setChangeTitle(event.target.value)
            }} />
            <button className='button is-primary'>save</button>
        </form>
        </div>
    );
}

export default BookEdit;
