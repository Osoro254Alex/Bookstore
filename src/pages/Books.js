import React from 'react';
import AddBookForm from '../components/AddBookForm';
import DisplayBookList from '../components/DisplayBookList';
import styles from './Books.module.css';

const Books = () => (
  <div className={styles.big_cont}>
    <DisplayBookList />
    <AddBookForm />
  </div>
);

export default Books;
