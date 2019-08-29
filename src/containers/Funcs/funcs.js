
// updateObj = Books that are on a shelf & books that were found from searchAPI
//filter is used to remove all books that are the same as the books on the shelf (pushing those books to updateObj)
// concating the updateObj into searchResult -> all the shelfs books will have a shelf prop 
export const getBooksFromAPI = (booksAPI, that) => {
    const shelfBooksUpdated = [...that.state.shelfBooks];
    const updatedObj = []
    let searchBookResult = []
    that.state.searchQuery === '' ?
        that.setState({ shownBooks: [] })
        : booksAPI.search(that.state.searchQuery).then(searchBooks => {
            searchBooks.error ?
                that.setState({ shownBooks: [] })
                : searchBookResult = searchBooks.filter(searchBook => {
                    let isShelfed = false;
                    for (let shelfBook of shelfBooksUpdated) {
                        if (shelfBook.id === searchBook.id && !isShelfed) {
                            updatedObj.push(shelfBook);
                            isShelfed = true;
                            break;
                        }
                        else
                            isShelfed = false;
                    };
                    return !isShelfed;
                });
            that.setState({ shownBooks: searchBookResult.concat(updatedObj) })
        });
};