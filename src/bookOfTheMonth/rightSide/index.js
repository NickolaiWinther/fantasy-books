import React from 'react';

import classes from './styles.module.css';

function RightSide({book}) {
  console.log(book);
  return (
    <div className={classes.wrapper}>
      <img src={`./images/${book.image}`} alt={book.name}/>
      <div>
        <h3>{book.name}</h3>
        <button>Bestil bog</button>
      </div>
    </div>
  );
};

export default RightSide;
