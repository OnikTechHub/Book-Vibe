import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Status Code */}
                <p className="text-3xl text-3xl font-bold font-[100px] text-indigo-600">404</p>

                {/* Main Heading */}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>

                {/* Description */}
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        Go back home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;