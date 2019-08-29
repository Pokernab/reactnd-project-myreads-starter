import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';
import { NavLink } from 'react-router-dom';
import BookShelf from '../components/BookShelf/BookShelf';
//State ->
// allBooks -> all books that are on the shelf
// readStats -> current books on each shelf


class MainPage extends Component {
    state = {
        allBooks: [],
        readStatus: {
            wantToRead: [],
            currentlyReading: [],
            read: []
        }
    };
    //Fetch all books that are currently on shelf 
    componentDidMount() {
        this.getAllBooks()
    };

    // used to fetch books from the API and distrubte them on shelfs
    getAllBooks = () => {
        BooksAPI.getAll().then(res => this.setState({ allBooks: res }, () => {
            const allBooks = [...this.state.allBooks]
            const updateReadStatus = { ...this.state.readStatus, wantToRead: [], currentlyReading: [], read: [] }
            for (let book of allBooks) {
                updateReadStatus[book.shelf].push(book)
            };
            this.setState({ readStatus: updateReadStatus });
        }));
    };

    //Changing between shelfs 
    changeShelfHandler = (idObj, event) => {
        const readType = event.target.value
        BooksAPI.update(idObj, readType).then(res => this.getAllBooks());
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
                    <BookShelf
                        shelfBooks={this.state.readStatus.wantToRead}
                        title={"wantToRead"}
                        changeShelf={this.changeShelfHandler} />
                    <BookShelf
                        shelfBooks={this.state.readStatus.currentlyReading}
                        title={"currentlyReading"}
                        changeShelf={this.changeShelfHandler} />
                    <BookShelf
                        shelfBooks={this.state.readStatus.read}
                        title={"read"}
                        changeShelf={this.changeShelfHandler} />
                </div>
                {toSearch}
            </div>
        );
    };
};


export default MainPage;