import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();
    // console.log(typeof bookId, "bookId")

    const books = useLoaderData();
    console.log(books, "books");
    const expectedBook = books.find((book) => book.bookId === Number(bookId))
    // console.log(expectedBook, "expectedBook")
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = expectedBook;

    const { handleMarhAsRead, handleWishList} = useContext(BookContext)

    
    return (
        <div className="max-w-7xl mx-auto my-10 p-5 lg:p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="bg-gray-100 rounded-2xl p-10 flex justify-center items-center">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-lg shadow-lg max-h-[500px] object-contain"
                    />
                </div>


                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-600">By: {author}</p>
                    <hr />
                    <p className="text-xl font-medium text-gray-600">{category}</p>
                    <hr />
                    <p><span className="font-bold">Review: </span>{review}</p>

                    <div className="flex gap-4 items-center">
                        <span className="font-bold">Tag:</span>
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <hr />


                    <table className="w-full text-left">
                        <tbody>
                            <tr>
                                <td className="py-1 text-gray-500 w-40">Number of Pages:</td>
                                <td className="font-bold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="py-1 text-gray-500">Publisher:</td>
                                <td className="font-bold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="py-1 text-gray-500">Year of Publishing:</td>
                                <td className="font-bold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="py-1 text-gray-500">Rating:</td>
                                <td className="font-bold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex gap-4 pt-4">
                        <button className="btn btn-outline border-gray-300 px-8 hover:bg-green-500 hover:border-green-500" onClick={() => handleMarhAsRead(expectedBook)}>Mark as Read</button>
                        <button className="btn bg-[#50B1C9] text-white px-8 hover:bg-cyan-600" onClick={()=> handleWishList(expectedBook)}> Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;