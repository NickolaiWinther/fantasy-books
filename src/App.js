import React from 'react';
import './App.css';
import Header from './header';
import Hero from './hero';
import Secondhand from './secondhand';
import books from './loadBooks';
import BookOfTheMonth from './bookOfTheMonth';
import BookClub from './bookClub';
import Footer from './footer';

async function App() {
  books = books.then(test => console.log(test));

  let bookNumber = Math.floor(Math.random() * ((books.length - 1)  +1) );
  console.log("bookNumber", bookNumber);
  
  let bookOfTheMonth = books[bookNumber];
  console.log("bookOfTheMonth", bookOfTheMonth);
  
  return (
    <>
      <Header/>
      <Hero/>
      <Secondhand books = {books}/>
      <BookOfTheMonth book = {bookOfTheMonth}/>
      <BookClub/>
      <Footer/>
    </>
  );
}

export default App;
