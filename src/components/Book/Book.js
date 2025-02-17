import React from 'react';


const book = (props) => {
  const select = (
    <select   defaultValue={props.shelf ? props.shelf : 'move'}  onChange={(event) => props.bookIntoShelf(props.book, event)}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select> 
  );


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.URL})` }}></div>
        <div className="book-shelf-changer">
          {select}
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  )
}


export default book;