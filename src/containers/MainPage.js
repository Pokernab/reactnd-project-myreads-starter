import React, { Component } from 'react';

import * as BooksAPI from '../BooksAPI';
import { NavLink } from 'react-router-dom';
import BookShelf from '../components/BookShelf/BookShelf';

class MainPage extends Component {
    state = {
        allBooks: [],
        shelfSize: '',
        readStatus: {
            wantToRead: [],
            currentlyReading: [],
            read: []
        }
    };
    
    componentDidMount() {
        this.getAllBooks()
    };

    getAllBooks = () => {
        BooksAPI.getAll().then(res => this.setState({ allBooks: res }, () => {
            const allBooks = [...this.state.allBooks]
            console.log(allBooks)
            const updateReadStatus = { ...this.state.readStatus, wantToRead: [], currentlyReading: [],read: [] }
            for (let book of allBooks) {
                    updateReadStatus[book.shelf].push(book)
            };
            this.setState({ readStatus: updateReadStatus });
        }));
    };

    changeShelfHandler = (idObj, event) => {
        const  readType= event.target.value
        BooksAPI.update(idObj, readType ).then( res => this.getAllBooks());
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
                    <BookShelf shelfBooks={this.state.readStatus.wantToRead}      title={"wantToRead"}       changeShelf={this.changeShelfHandler}/>
                    <BookShelf shelfBooks={this.state.readStatus.currentlyReading} title={"currentlyReading"} changeShelf={this.changeShelfHandler} />
                    <BookShelf shelfBooks={this.state.readStatus.read}   title={"read"} changeShelf={this.changeShelfHandler} />
                </div>
                {toSearch}
            </div>
        );
    };
};


export default MainPage;