import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from './bookCard';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();

    if (isLoading) {
        return <div className="py-10 text-center">Loading search results...</div>;
    }

    if (isError) {
        return <div className="py-10 text-center text-red-500">Error loading search results.</div>;
    }

    const filteredBooks = books.filter(book => {
        const titleMatch = book.title?.toLowerCase().includes(query.toLowerCase());
        const descMatch = book.description?.toLowerCase().includes(query.toLowerCase());
        return titleMatch || descMatch;
    });

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">
                Search Results for "{query}"
            </h2>

            {filteredBooks.length === 0 ? (
                <p className="text-gray-500">No books found matching your search.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
