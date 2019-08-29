import React, { Component, Fragment } from 'react';

import * as booksAPI from '../BooksAPI';
import { getBooksFromAPI } from './Funcs/funcs';
import SearchInput from '../components/Search/SearchInput';
import SearchBooksGrid from '../components/Search/SearchBooksGrid';

//State -> 
// searchQuery -> value of search input
// shelfBooks -> books that were on the shelf once we loaded this component
// shownBooks -> currently shown books on the page

class SearchBooks extends Component {
    state = {
        shelfBooks: [],
        searchQuery: '',
        shownBooks: [],
    };
    componentDidMount() {
        //Fetching all books that are currently on shelf
        booksAPI.getAll().then( res => this.setState({shelfBooks: res}) );
    }
    //Listen to  input value and set searchQuery equals to it -> use getBooksFromAPI func passing (API, this)
    changeQueryHandler = (event) => {
        this.setState({ searchQuery: event.target.value }, () => getBooksFromAPI(booksAPI, this));     
    };
    //Change the shelf of a current book. (idObj = Book object, event = selected value)
    bookIntoShelfHandler = (idObj, event) => {
        const readStatus = event.target.value
        booksAPI.update(idObj, readStatus)
    };
    
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