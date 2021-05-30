import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Books = ({ books, onShelfChange }) => {
  const shelvesMap = {
    "Want to Read": "wantToRead",
    "Read": "read",
    "Currently Reading": "currentlyReading",
  };
  const booksByShelf = (books, shelf) => {
    return (
      <div>
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filterBooksByShelf(books, shelvesMap[shelf]).map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} onShelfChange={onShelfChange} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  };

  const filterBooksByShelf = (books, shelf) => {
    const filtered = books.reduce((filtered, book) => {
      if (book.shelf === shelf) {
        filtered.push(book);
      }
      return filtered;
    }, []);
    return filtered;
  };
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          {booksByShelf(books, "Currently Reading")}
        </div>
        <div className="bookshelf">{booksByShelf(books, "Want to Read")}</div>
        <div className="bookshelf">{booksByShelf(books, "Read")}</div>
      </div>
    </div>
  );
};

export default Books;

Books.propTypes = {
  requiredArray: PropTypes.array,
};
