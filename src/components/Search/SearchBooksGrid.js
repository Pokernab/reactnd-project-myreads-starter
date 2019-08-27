import React from 'react';

import Book from '../Book/Book';

const searchBooksGrid = (props) => {
    const { shownBooks } = props;
    let bookArr = [];
    if (shownBooks[0] === 'undefined' && shownBooks.Length) {
        booksArr = []
    }
    else {
        for (let book of shownBooks) {
            bookArr.push(
                <li key={book.id}>
                    <Book
                        URL={book.imageLinks.smallThumbnail}
                        title={book.title}
                        author={book.authors}
                    />
                </li>
            );
        };
    }
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {bookArr}
            </ol>
        </div>
    );
};


export default searchBooksGrid;
