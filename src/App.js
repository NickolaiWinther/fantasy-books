import React from 'react';
import './App.css';
import Header from './header';
import Hero from './hero';
import Secondhand from './secondhand';
import books from './loadBooks';
import BookOfTheMonth from './bookOfTheMonth';

function App() {
  let bookNumber = Math.floor(Math.random() * (books.length - 0 +1) + 0);
  console.log(books);
  console.log("bookNumber", bookNumber);
  return (
    <>
      <Header/>
      <Hero/>
      <Secondhand books = {books}/>
      <BookOfTheMonth book = {books[bookNumber]}/>
    </>
  );
}

export default App;
