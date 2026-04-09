import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { HiOutlineLocationMarker, HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi";

const ListedWishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    const [filteredWishList, setFilteredWishList] = useState([]);

    useEffect(() => {
   
        let sortedData = [...wishList];

        if (sortingType === 'page') {
            sortedData.sort((a, b) => {
                const pageA = parseInt(a.totalPages || a.page) || 0;
                const pageB = parseInt(b.totalPages || b.page) || 0;
                return pageB - pageA;
            });
        }
        else if (sortingType === "rating") {
            sortedData.sort((a, b) => {
                const ratingA = parseFloat(a.rating) || 0;
                const ratingB = parseFloat(b.rating) || 0;
                return ratingB - ratingA; 
            });
        }

   
        setFilteredWishList(sortedData);

    }, [sortingType, wishList]);


    if (!wishList || wishList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex flex-col items-center justify-center rounded-2xl'>
                <h2 className='font-bold text-3xl text-[#131313]'>No wish list data found</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 p-4">
            {
                
                filteredWishList.map((book) => (
                    <div key={book.bookId} className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-2xl bg-white">

                        <div className="bg-[#1313130d] rounded-2xl flex items-center justify-center p-8 w-full md:w-60 h-64">
                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="h-full object-contain drop-shadow-lg"
                            />
                        </div>

                       
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#131313] mb-2">{book.bookName}</h2>
                            <p className="font-medium text-[#131313cc] mb-4 text-base">By : {book.author}</p>

                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="font-bold text-[#131313]">Tag</span>
                                {book.tags && book.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-1 bg-[#23be0a0d] text-[#23BE0A] rounded-full text-sm font-medium">
                                        #{tag}
                                    </span>
                                ))}
                                <div className="flex items-center gap-2 text-[#13131399] ml-2">
                                    <HiOutlineLocationMarker className="text-xl" />
                                    <span>Year: {book.yearOfPublishing}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 mb-5 text-[#13131399] border-b border-gray-100 pb-5">
                                <div className="flex items-center gap-2">
                                    <HiOutlineUsers className="text-xl" />
                                    <span>Publisher: {book.publisher}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HiOutlineDocumentText className="text-xl" />
                                    <span>Page: {book.totalPages || book.page}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-5 py-2 bg-[#328eff26] text-[#328EFF] rounded-full text-sm">
                                    Category: {book.category}
                                </span>
                                <span className="px-5 py-2 bg-[#ffac3326] text-[#FFAC33] rounded-full text-sm">
                                    Rating: {book.rating}
                                </span>
                                <button className="px-5 py-2 bg-[#23BE0A] text-white rounded-full font-medium text-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ListedWishList;