import React from 'react';

export const bookIntoShelfHandler = (idObj, event) => {
    const readStatus = event.target.value
    booksAPI.update(idObj, readStatus).then(res => console.log(res))
};

