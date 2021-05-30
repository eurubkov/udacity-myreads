import React from "react";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  const booksByShelf = (books, category) => {
    return (
      <div>
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              );
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
