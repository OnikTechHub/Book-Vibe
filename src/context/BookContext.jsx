import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarhAsRead = (currentBook) => {

        //step 1: store book id or store book object
        //steo 2: where to store
        // steps 3: array or collection
        //steps 4: if the book is already exist then show a alert or toast
        // steps 5: if not then add the in the array or collection
        // console.log(currentBook, storedBook, "bookId")

        const isExistBook = readList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        if (isExistBook) {
            toast.error("the book is already exist ");
        } else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Readlist`)
        }
        console.log(currentBook, readList, "book");
    };
    const handleWishList = (currentBook) => {

        //step 1: store book id or store book object
        //steo 2: where to store
        // steps 3: array or collection
        //steps 4: if the book is already exist then show a alert or toast
        // steps 5: if not then add the in the array or collection
        // console.log(currentBook, storedBook, "bookId")

        const isExistReadList = readList.find(
            (book) => book.bookId === currentBook.bookId, );


            if(isExistReadList){
                toast.error("This book is already in read list")
                return;
            }
        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        if (isExistBook) {
            toast.error("the book is already exist ");
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to WishList`)
        }
        console.log(currentBook, readList, "book");
    };

    const data = {
        readList,
        setReadList,
        handleMarhAsRead,
        wishList,
        setWishList,
        handleWishList,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>

};

export default BookProvider;