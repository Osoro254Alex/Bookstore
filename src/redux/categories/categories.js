import types from '../types/types';

// initial state
const initialState = {
  categories: [],
};
// Actions Creators
export const checkStatus = () => ({
  type: types.BOOK_STATUS_CHECK,
});

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOK_STATUS_CHECK:
      return {
        ...state,
        categories: [...state.categories, 'UNDER_CONSTRUCTION'],
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
