import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './styles.modules.css';
import menu from './menu.json';

function Header() {
   return (
      <header>
         <h1><span>Fantasy</span>books</h1>
         <nav>
            <ul>
               { menu.map((x, i) => 
                  <li key={i}><NavLink activeClassName={classes.active} to={x.url}>{x.name}</NavLink></li>
               ) }
            </ul>
            <button>Opret Bruger</button>
         </nav>
      </header>
   )
};

export default Header;