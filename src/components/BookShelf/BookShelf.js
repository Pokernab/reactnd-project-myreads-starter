import React from 'react';

import ShelfTitle from './Shelf/ShelfTitle/ShelfTitle';
import BookOnShelf from './Shelf/BookOnShelf/BookOnShelf';

const bookShelf = (props) => {
    let title = 'Want To read';
    if (props.title === 'currentlyReading') {
        title = 'Currently Reading';
    }
    if (props.title === 'read') {
        title = 'Read';
    };

    return (
        <div className="bookshelf">
            <ShelfTitle title={title} />
            <BookOnShelf shelfBooks={props.shelfBooks} changeShelf={props.changeShelf} shelf={props.title} />
        </div>
    );
};


export default bookShelf;