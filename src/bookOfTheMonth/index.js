import React from 'react';
import classes from './styles.module.css';
import LeftSide from './leftSide';
import RightSide from './rightSide';

function BookOfTheMonth({book}) {
   
   return (
      <section className={classes.wrapper}>
         <LeftSide/>
         <RightSide book={book}/>
      </section>
   )
}

export default BookOfTheMonth;