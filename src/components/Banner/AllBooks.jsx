
import React, { use } from 'react';
import { FaRegStar } from "react-icons/fa";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books, "books")
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-2xl text-center mb-6'>Books</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book) => {
                        return (
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className='p-6 '>
                                    <img
                                        src={book.image}
                                        alt={book.book} className='rounded-xl ' />
                                </figure>
                                <div className="card-body">
                                    <div className='flex items-center gap-4'>
                                        {book.tags.map((tag) => (
                                            <div className="badge text-green-500 bg-green-100 font-bold ">{tag} </div>
                                        ))}
                                    </div>
                                    <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                                    <p className='font-bold text-lg'>{book.author}</p>
                                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-25 ">
                                        <div className="badge font-semibold text-xl">{book.category} </div>
                                        <div className="badge font-semibold text-xl">{book.rating} <FaRegStar /></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;