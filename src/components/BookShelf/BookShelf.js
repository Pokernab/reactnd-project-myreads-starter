import React from 'react';

import ShelfTitle from './Shelf/ShelfTitle/ShelfTitle';
import BookOnShelf from './Shelf/BookOnShelf/BookOnShelf';

const bookShelf = (props) => {
    return (
        <div className="bookshelf">
            <ShelfTitle title={props.title} />
            <BookOnShelf shelfBooks={props.shelfBooks} changeShelf={props.changeShelf} shelf={props.title} />
        </div>
    );
};


export default bookShelf;