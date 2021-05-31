import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import './App.css';
import * as BooksAPI from "./BooksAPI";
import Books from "./components/Books";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    books: {},
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
    const app = (
      <div className="app">
          <Route path="/search" exact render={() => 
<Search
            books={this.state.books}
            onShelfChange={this.onShelfChange}
            shelfDescriptionsDict={this.shelfDescriptionsDict()}
          />
        }
          />
         <Route path="/" exact render={() => 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Books
              books={Object.values(this.state.books)}
              onShelfChange={this.onShelfChange}
            />
            <div className="open-search">
              <Link to="/search">
                    <button />
              </Link>
            </div>
          </div>
         }
          />
      </div>
    );
    return <BrowserRouter>{app}</BrowserRouter>
  }
}

export default BooksApp
