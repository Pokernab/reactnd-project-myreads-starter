import React from 'react';

export const bookIntoShelfHandler = (idObj, event) => {
    const readStatus = event.target.value
    booksAPI.update(idObj, readStatus).then(res => console.log(res))
};




//Search for books on the shelf -> 
    getBooksFromAPI = () => {
        const shelfBooks = [...this.state.shelfBooks];
        if (this.state.searchQuery.trimLeft() === '') { this.setState({ shownBooks: [] }) }
        else booksAPI.search(this.state.searchQuery).then(searchBooks => {
             const searchBookResult = searchBooks.filter(searchBook => {
                let isShelfed = false
                for (let shelfBook of shelfBooks) {
                    if (shelfBook.id === searchBook.id && !isShelfed) {
                         isShelfed = true
                         break;
                    }
                    else   
                    isShelfed = false;
                }
               return isShelfed 
            });
        }

//  returns only books that are not shelfed
        else booksAPI.search(this.state.searchQuery).then(searchBooks => {
            const searchBookResult = searchBooks.filter(searchBook => {
               let isShelfed = false
               for (let shelfBook of shelfBooks) {
                   if (shelfBook.id === searchBook.id && !isShelfed) {
                        isShelfed = true
                        break;
                   }
                   else   
                   isShelfed = false;
               }
              return !isShelfed 
           });

           console.log(searchBookResult)
            this.setState({ shownBooks: searchBookResult }) })
   };