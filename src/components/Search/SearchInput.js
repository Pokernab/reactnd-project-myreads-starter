import React from 'react';

const searchBooks = (props) => {
    return <div className="search-books">
        <div className="search-books-bar">
            <button className="close-search">Close</button>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={props.query} onChange={props.change} />
            </div>
        </div>
    </div>
};

export default searchBooks;
