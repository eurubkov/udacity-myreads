# MyReads

A books tracker that allows one to add new books to different "shelves". 
Current shelves:
- Currently Reading
- Read
- Want to Read

The app is currently limited to getting books from an API provided by Udacity, hence not many books can be found. The current list can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).


## How to start

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify the development process, Udacity provided a backend server for us to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that we need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

