import React from 'react';

import { useState,useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


const App = () => {
    useEffect(()=> {
        fetchData()
    },[])
    const fetchData =async () => {
        const response = await axios.get("http://localhost:3001/books") 
        setBooks(response.data)
        console.log(response.data)
        
    }
  

    const [books, setBooks] = useState([])
    const bookCreate = async (title) => {
    const response=   await axios.post("http://localhost:3001/books", {
        title:title
    })
   
        
         const updatedBook = [...books, response.data
         
         ]
        
        setBooks(updatedBook)
       
    }
    const editBoobkById = async(id, newTitle) => {
     const response=   await axios.put(`http://localhost:3001/books/${id}`,{
              
            title:newTitle
     })
        console.log(response)
        const updatedBookTitle = books.map((book) => {
            if (book.id === id) {
                return { ...book ,title: newTitle}
            } 
                return  book
                
            
        })
        setBooks(updatedBookTitle)
    }
    const deleteBookbyId = (id) => {
        const updatedBookdeleted = books.filter((book) => {

        return   book.id !== id
        })
        setBooks(updatedBookdeleted)
    }
    
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books= {books} deletedBook ={deleteBookbyId} onEdit={editBoobkById} />
            <BookCreate onCreate={bookCreate} />
            
        </div>
    );
}

export default App;
