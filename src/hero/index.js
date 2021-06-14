import React from 'react';
import './hero.css';
import text from './hero_text.json';

function Hero(){
   return (
      <div className='hero'>
         <div className='image'>
            <div className='text-box'>
               <p>{text.text1}</p>
               <p>{text.text2}</p>
            </div>
         </div>
      </div>
   )
}

export default Hero;