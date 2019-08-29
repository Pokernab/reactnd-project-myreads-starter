import React from 'react';

import Book from '../../../Book/Book';

const shelfGrid = (props) => {
        const bookArr = [];
        for (let book of props.shelfBooks) {
            bookArr.push(
                <li key={book.id}>
                    <Book
                        shelf={book.shelf}
                        book={book}
                        bookIntoShelf={props.changeShelf}
                        URL={book.imageLinks ? book.imageLinks.smallThumbnail : null}
                        title={book.title}
                        author={book.authors}
                    />
                </li>
            );
        };
    return (
        <ol className="books-grid">
            {bookArr}
        </ol>
    );
};


export default shelfGrid;