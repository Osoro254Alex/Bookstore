import types from '../types/types';
// initial state
const initialState = {
  numberOfBooks: '3',
  books: [

    { id: '1', title: 'Life of a Footballer', author: 'Beckham' },
    { id: '2', title: 'The Blog Life', author: 'Maxwell' },
    { id: '3', title: 'Secret of A Long Life', author: 'Wu-Zing' },
  ],
};
// Actions Creators
export const addingBook = (addedBook) => ({ type: types.ADDED_BOOK, addedBook });

export const removingBook = (id) => ({ type: types.REMOVED_BOOK, id });

// Reducers Creator
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + 1,
        books: [...state.books, action.addedBook],
      };
    case types.REMOVED_BOOK:
      return {
        numberOfBooks: state.numberOfBooks - 1,
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
