import React from 'react';
import './App.css';
import Header from './header';
import Hero from './hero';
import Secondhand from './secondhand';
import BookOfTheMonth from './bookOfTheMonth';
import BookClub from './bookClub';
import Footer from './footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Secondhand />
      <BookOfTheMonth />
      <BookClub />
      <Footer />
    </>
  );
}

export default App;
