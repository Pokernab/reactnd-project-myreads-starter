import React from 'react';

import ShelfGrid from '../ShelfGrid/ShelfGrid';

const bookShelf = ( props ) => {
    return (
        <div className="bookshelf-books">
            <ShelfGrid shelfBooks={props.shelfBooks} changeShelf={props.changeShelf} />
        </div>
    );  
};

export default bookShelf;