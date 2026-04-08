
import React, { use } from 'react';
import BookCard from '../Ui/BookCard';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books, "books")
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-2xl text-center mb-6'>Books</h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {books.map((book, ind) => (
                    <BookCard key={ind} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;