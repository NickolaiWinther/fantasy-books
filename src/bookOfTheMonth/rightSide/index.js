import React, { useContext } from 'react';
import BooksContext from '../../store/books-context';
import classes from './styles.module.css';

function RightSide() {
  let booksCont = useContext(BooksContext);
  console.log("rightSide test",booksCont.books);
  let book = booksCont.books.map((book) => {
    return (
      <>
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
      </>
    )
  })
  console.log(book);
  return (
    <div className={classes.wrapper}>
      {book}
    </div>
  );
};

export default RightSide;
