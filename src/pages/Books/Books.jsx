import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks, wishList, "bookContext")
    return (
        <div>
            Read list: {storedBooks.length} <br></br>
            wish list: {wishList.length}
        </div>
    );
};

export default Books;