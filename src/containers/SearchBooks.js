import React, { Component, Fragment } from 'react';

import * as booksAPI from '../BooksAPI';
import SearchInput from '../components/Search/SearchInput';
import SearchBooksGrid from '../components/Search/SearchBooksGrid';

class SearchBooks extends Component {
    state = {
        searchQuery: '',
        shownBooks: [],
    };

    changeQueryHandler = (event) => {
        const searchBooks = () => booksAPI.search(this.state.searchQuery).then(res  => this.setState({shownBooks:res}));
        this.setState({ searchQuery: event.target.value },  () => searchBooks() ); 
    };

    render() {
        return (
            <Fragment>
                <SearchInput
                    query={this.state.searchQuery}
                    change={this.changeQueryHandler}
                />
                <SearchBooksGrid shownBooks={this.state.shownBooks}/>
            </Fragment>
        );
    };
};

export default SearchBooks