import React from "react";

const ShelfChanger = ({ book, onShelfChange }) => {
  const handleOnChange = (e) => {
    onShelfChange(book, e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={handleOnChange}>
        <option key={"moveTo"} value="move" disabled>
          Move to...
        </option>
        <option key={"reading"} value="currentlyReading">
          Currently Reading
        </option>
        <option key={"wantToRead"} value="wantToRead">
          Want to Read
        </option>
        <option key={"read"} value="read">
          Read
        </option>
        <option key={"none"} value="none">
          None
        </option>
      </select>
    </div>
  );
};

export default ShelfChanger;
