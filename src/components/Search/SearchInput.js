import React from 'react';

import { NavLink } from 'react-router-dom';

const searchBooks = ({query, change}) => {
    return <div className="search-books">
        <div className="search-books-bar">
            <NavLink to='/'><button className="close-search">Close</button></NavLink>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={ change} />
            </div>
        </div>
    </div>
};

export default searchBooks;
