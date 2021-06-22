import React, { useContext } from 'react';
import classes from './secondhand.module.css';
import BookCard from './bookCard/bookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BooksContext from '../store/books-context';

function Secondhand() {
   const BooksCont = useContext(BooksContext);
   let books = BooksCont.books;
   console.log(books);
   books.map((book, i) => {
      return ( <BookCard key={`book${i}`} book={books[i]}/> );
   })
   // for (let i = 0; i < Math.min(4, books.length); i++) {
   //    displayBooks.push(<BookCard key={`book${i}`} book={books[i]}/>);
   // }
   return (
      <section className={classes.secondhand}>
         <div className={classes.header}>
            <h3>Secondhand</h3>
            <a href="/" className={classes['read-more']} >Vis flere <FontAwesomeIcon icon={faArrowRight} /></a>
         </div>
         <div className={classes.books}>
            { books }
         </div>
      </section>
   )
}

export default Secondhand;