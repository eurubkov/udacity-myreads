import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Books = ({ books }) => {
  const booksByShelf = (books, category) => {
    return (
      <div>
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return <li key={book.id}>
                  <Book book={book} />
                </li>;
            })}
          </ol>
        </div>
      </div>
    );
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
