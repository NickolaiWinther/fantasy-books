import React from 'react';
import classes from './styles.module.css';
import LeftSide from './leftSide';
import RightSide from './rightSide';

function BookOfTheMonth() {
   return (
      <section className={classes.wrapper}>
         <LeftSide />
         <RightSide />
      </section>
   )
}

export default BookOfTheMonth;