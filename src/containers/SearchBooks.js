import React, { Component, Fragment } from 'react';

import * as booksAPI from '../BooksAPI';
import SearchInput from '../components/Search/SearchInput';
import SearchBooksGrid from '../components/Search/SearchBooksGrid';

class SearchBooks extends Component {
    state = {
        searchQuery: '',
        shownBooks: [],
        error: ''
    };
    // query an empty string ? return an empty array : return querySearch on it
    getBooksFromAPI = () => {
        if (this.state.searchQuery === '') { this.setState({shownBooks: []}) }
        else booksAPI.search(this.state.searchQuery).then(res => this.setState({shownBooks: res}))
    };
    //change query state  -> Search for books with it
    changeQueryHandler = (event) => {
        this.setState( { searchQuery: event.target.value }, () => this.getBooksFromAPI() )
    };

    bookIntoShelfHandler = (idObj, event) => {
       const  readStatus = event.target.value
       booksAPI.update(idObj, readStatus ).then(res => console.log(res))
    }
    render() {
        return (
            <Fragment>
                <SearchInput
                    query={this.state.searchQuery}
                    change={this.changeQueryHandler} />
                <SearchBooksGrid 
                    bookIntoShelf = {this.bookIntoShelfHandler}
                    shownBooks={this.state.shownBooks} />
            </Fragment>
        );
    };
};

export default SearchBooks;