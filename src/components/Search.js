import React, { useState } from "react";
import SearchBar from "./SearchBar";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

const Search = ({ onShelfChange, books, shelfDescriptionsDict }) => {
  const [foundBooks, setFoundBooks] = useState([]);
  const [isError, setIsError] = useState(false);
  const onSearchTermChange = (searchTerm) => {
    searchBooks(searchTerm);
  };
  const searchBooks = (searchTerm) => {
    if (!searchTerm) {
      setFoundBooks([]);
    } else {
        BooksAPI.search(searchTerm).then((books) => {
            if (books instanceof Array) {
                setIsError(false);
                setFoundBooks(
                    books.filter((book) => book.imageLinks && book.imageLinks.thumbnail)
                  )
            } else {
                setIsError(true);
                setFoundBooks([]);
            }
        }
      );
    }
  };
  const determineBook = (book) => {
    if (book.id in books) return books[book.id];
    return book;
  };

  const getShelfDescription = (book) => {
    if (book.id in books) {
      return shelfDescriptionsDict[books[book.id].shelf];
    }
    return "";
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <SearchBar onSearchTermChange={onSearchTermChange} />
      </div>
      <div className="search-books-results">
        <p>{isError ? "No results found" : ""}</p>
        <ol className="books-grid">
          {foundBooks.map((book) => (
            <li key={book.id}>
              <Book book={determineBook(book)} onShelfChange={onShelfChange} />
              <p>
                <b>{getShelfDescription(book)}</b>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
