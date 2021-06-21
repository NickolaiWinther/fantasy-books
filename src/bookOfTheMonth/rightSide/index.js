import React from 'react';

import classes from './styles.module.css';

function RightSide({book}) {
  console.log(book);
  return (
    <div className={classes.wrapper}>
      <img src={`./images/books/${book.image}`} alt={book.name}/>
      <div>
        <h3>{book.name}</h3>
        <table>
          <thead>
            <tr>
              <th>Forfatter</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.author}</td>
              <td>{book.type}</td>
            </tr>
          </tbody>
        </table>
        <p>Her kan du læse et kort resumé af bogen, samt få vores oplvelser både med bogen og med filmen.</p>
        <button>Bestil bog</button>
      </div>
    </div>
  );
};

export default RightSide;
