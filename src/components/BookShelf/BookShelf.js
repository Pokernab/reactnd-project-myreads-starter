import React from 'react';

import ShelfTitle from './Shelf/ShelfTitle';
import BookOnShelf from './Shelf/BookOnShelf';

const bookShelf = (props) => {
    return (
        <div className="bookshelf">
            <ShelfTitle title={props.title} />
            <BookOnShelf shelfBooks={props.shelfBooks} />
        </div>
    );
};


export default bookShelf;