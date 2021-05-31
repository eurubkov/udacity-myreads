import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import * as BooksAPI from "./BooksAPI";
import Books from "./components/Books";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    books: {},
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      const booksDict = {};
      for (const book of books) {
        booksDict[book.id] = book;
      }
      this.setState({ books: booksDict });
    });
  };

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((_) =>
      this.setState((prevState) => {
        const updatedBook = { ...book, shelf: newShelf };
        const booksCopy = { ...prevState.books };
        booksCopy[book.id] = updatedBook;
        return { books: booksCopy };
      })
    );
  };

  shelfDescriptionsDict = () => {
    const shelfDescriptions = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
    };
    return shelfDescriptions;
  };

  onShelfChange = (book, newShelf) => {
    this.updateBook(book, newShelf);
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            books={this.state.books}
            onShelfChange={this.onShelfChange}
            shelfDescriptionsDict={this.shelfDescriptionsDict()}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Books
              books={Object.values(this.state.books)}
              onShelfChange={this.onShelfChange}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp
