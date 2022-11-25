import React from 'react';
import DisplayAbook from './DisplayAbook';

const DisplayBookList = () => {
  const books = [
    {
      Id: 123,
      Title: 'Secret of Keeping Books Record',
      Author: 'Alex O.O',
    },
  ];
  return (
    <>
      <div className="book_cont">
        <ul>
          {books.map((book) => (
            <DisplayAbook
              Title={book.Title}
              Author={book.Author}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
