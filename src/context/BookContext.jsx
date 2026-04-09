import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const handleMarhAsRead = (currentBook) => {

        //step 1: store book id or store book object
        //steo 2: where to store
        // steps 3: array or collection
        //steps 4: if the book is already exist then show a alert or toast
        // steps 5: if not then add the in the array or collection
        // console.log(currentBook, storedBook, "bookId")

        const isExistBook = storedBooks.find(
            (book) => book.bookId === currentBook.bookId,
        );
        if (isExistBook) {
            alert("the book is already exist ");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to list`)
        }
        console.log(currentBook, storedBooks, "book");
    };

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarhAsRead,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>

};

export default BookProvider;