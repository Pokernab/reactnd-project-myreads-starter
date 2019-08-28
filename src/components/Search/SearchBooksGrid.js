import React from 'react';

import Book from '../BookShelf/Shelf/Book';

const searchBooksGrid = (props) => {
    const { shownBooks } = props;
    let bookArr = [];
    if (shownBooks.error) {  bookArr = shownBooks.items }
    else {
        for (let book of shownBooks) {
            bookArr.push(
                <li key={book.id}>
                    <Book
                        bookIntoShelf={props.bookIntoShelf}
                        id={book}
                        URL={book.imageLinks ? book.imageLinks.smallThumbnail : null}
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
