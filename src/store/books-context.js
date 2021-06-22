import { createContext, useState, useEffect } from 'react'

const BooksContext = createContext({
   books: [],
   addBook: (addBook) => {},
   removeBook: (bookId) => {}
});

export function BooksContextProvider(props) {
   const [loadedBooks, setLoadedBooks] = useState([]);
   
   useEffect(() => {
      fetch('http://localhost:3001/books')
         .then((response) => {
            console.log(response);
            return response.json()
         })
         .then((data) => {
            const allBooks = [];

            console.log(data);
            for (const key in data) {
               allBooks.push({
                  ...data[key]
               })
            }
            console.log(allBooks);


            setLoadedBooks(allBooks);
         })
   }, [])

   function addBookHandler(newBook) {
      fetch("http://localhost:3001/books", {
         method: "POST",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newBook)
      })
         .then((res) => res.json())
         .then((data) => {
            setLoadedBooks((prevBooks) => {
               return prevBooks.concat({
                  ...data
               });
            });
         });
   }

   function removeBookHandler(bookId) {
      fetch(`http://localhost:3001/books/${bookId}`, {
         method: "DELETE",
      })
         .then((res) => {
            if (res.ok) {
               setLoadedBooks((prevBooks) => {
                  return prevBooks.filter((book) => book._id !== bookId);
               });
            }
         })
         .catch((err) => console.log(err));
   }

   const context = {
      books: loadedBooks,
      addBooks: addBookHandler,
      removeBooks: removeBookHandler
   }

   return (
      <BooksContext.Provider value={context}>
         {props.children}
      </BooksContext.Provider>
   )
}

export default BooksContext;