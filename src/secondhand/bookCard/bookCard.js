import React from 'react'
import classes from './bookCard.module.css'

function BookCard({ book }) {
   return (
      <figure className={classes.book }>
         <img alt={book.name} src={`./images/${book.image.replace("./", "")}`}/>
         <div className={classes['text-wrapper']}>
            <figcaption>
               {book.name}
            </figcaption>
         </div>
      </figure>
   )
}

export default BookCard;