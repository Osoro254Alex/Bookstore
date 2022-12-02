import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../redux/fetch/booksFetcher';
import styles from './DisplayAbook.module.css';

const DisplayAbook = (props) => {
  const {
    Category, Title, Author, Id,
  } = props;

  const dispatch = useDispatch();

  const bookRemoveHandle = () => {
    dispatch(deletingBook(Id));
  };

  return (
    <li className={styles.book_cont}>
      <div>
        <p>{Category}</p>
        <h2>{Title}</h2>
        <h4>{Author}</h4>
        <div className={styles.book_Butt}>
          <button type="button">Comments</button>
          <button type="button" onClick={bookRemoveHandle}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
    </li>
  );
};

DisplayAbook.propTypes = {
  Category: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default DisplayAbook;
