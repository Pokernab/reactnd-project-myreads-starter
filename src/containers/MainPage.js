import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';
import { NavLink } from 'react-router-dom';
import BookShelf from '../components/BookShelf/BookShelf';

class MainPage extends Component {
    state = {
        allBooks: [],
        readStatus: {
            wantToRead: [],
            currentlyReading: [],
            read: []
        }
    };

    componentDidMount() {
        BooksAPI.getAll().then(res => this.setState({ allBooks: res }, () => {
            const allBooks = [...this.state.allBooks]
            const updateReadStatus = { ...this.state.readStatus }
            for (let book of allBooks) {
                updateReadStatus[book.shelf].push(book)
            };
            this.setState({ readStatus: updateReadStatus });
        }));
        console.log(this.state.readStatus)

    };

    render() {
        const toSearch = (
            <div className="open-search">
                <NavLink to='/search'>
                    <button>add a book</button>
                </NavLink>
            </div>
        );


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf shelfBooks={this.state.readStatus.wantToRead}        title={"WantToRead"} />
                    <BookShelf shelfBooks={this.state.readStatus.currentlyReading}  title={"CurrentlyReading"} />
                    <BookShelf shelfBooks={this.state.readStatus.read}              title={"Read"} />
                </div>
                {toSearch}
            </div>
        );
    };
};


export default MainPage;