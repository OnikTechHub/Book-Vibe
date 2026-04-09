import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 border border-gray-200 rounded-[24px] p-6 hover:shadow-md transition-shadow">


            <figure className="bg-[#F3F3F3] rounded-[16px] py-8 flex justify-center items-center h-[230px]">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-full object-contain drop-shadow-xl"
                />
            </figure>

            <div className="mt-6">
                {/* Tags */}
                <div className="flex gap-3 mb-4">
                    {book.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Author */}
                <h2 className="text-[#131313] text-2xl font-bold font-playfair mb-2 leading-tight">
                    {book.bookName}
                </h2>
                <p className="text-[#131313CC] font-medium mb-5">
                    By : {book.author}
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-300 my-4"></div>

                {/* Footer Info */}
                <div className="flex justify-between items-center text-[#131313CC] font-medium">
                    <span>{book.category}</span>
                    <div className="flex items-center gap-2">
                        <span>{book.rating.toFixed(2)}</span>
                        <FaRegStar className="text-xl" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;