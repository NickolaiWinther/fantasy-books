import React from 'react';
import classes from './secondhand.module.css';
import BookCard from './bookCard/bookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Secondhand({books}) {
   let displayBooks = []
   for (let i = 0; i < Math.min(4, books.length); i++) {
      displayBooks.push(<BookCard key={`book${i}`} book={books[i]}/>);
   }
   return (
      <section className={classes.secondhand}>
         <div className={classes.header}>
            <h3>Secondhand</h3>
            <a href="/" className={classes['read-more']} >Vis flere <FontAwesomeIcon icon={faArrowRight} /></a>
         </div>
         <div className={classes.books}>
            { displayBooks }
         </div>
      </section>
   )
}

export default Secondhand;