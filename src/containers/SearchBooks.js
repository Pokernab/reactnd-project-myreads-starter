import React, { Component, Fragment } from 'react';

import * as booksAPI from '../BooksAPI';
import SearchInput from '../components/Search/SearchInput';
import SearchBooksGrid from '../components/Search/SearchBooksGrid';

class SearchBooks extends Component {
    state = {
        shelfBooks: [],
        searchQuery: '',
        shownBooks: [],
        error: ''
    };
    componentDidMount() {
        booksAPI.getAll().then( res => this.setState({shelfBooks: res}) )
    }
    // query an empty string ? return an empty array : return querySearch on it
    getBooksFromAPI = () => {
        const shelfBooks = [...this.state.shelfBooks];
        let updatedObj = []
        if (this.state.searchQuery.trimLeft() === '') { this.setState({ shownBooks: [] }) }
        else booksAPI.search(this.state.searchQuery).then(searchBooks => {
             const searchBookResult = searchBooks.filter(searchBook => {
                let isShelfed = false
                for (let shelfBook of shelfBooks) {
                    if (shelfBook.id === searchBook.id && !isShelfed) {
                        updatedObj.push(shelfBook)
                         isShelfed = true
                         break;
                    }
                    else   
                    isShelfed = false;
                }
               return !isShelfed 
            });
             this.setState({ shownBooks: searchBookResult.concat(updatedObj) }) })
    };
    //change query state  -> Search for books with it
    changeQueryHandler = (event) => {
        this.setState({ searchQuery: event.target.value }, () => this.getBooksFromAPI())
        
    };

    bookIntoShelfHandler = (idObj, event) => {
        const readStatus = event.target.value
        booksAPI.update(idObj, readStatus)
    }
    render() {
        return (
            <Fragment>
                <SearchInput
                    query={this.state.searchQuery}
                    change={this.changeQueryHandler} />
                <SearchBooksGrid
                    bookIntoShelf={this.bookIntoShelfHandler}
                    shownBooks={this.state.shownBooks} />
            </Fragment>
        );
    };
};

export default SearchBooks;