import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './styles.module.css';

function LeftSide() {
  return (
    <div className={classes.wrapper}>
      <h3>Månedens bog</h3>
      <p>Hver måned anbefaler vi en bog. En bog som vi bare ved at alle fantasy læserne vil blive opslugt af.</p>
      <p>Månedens bog er, som altid, at finde rigtigt billigt i vores secondhand store i denne måned.</p>
      <a href="/">Tidligere måneders bøger <FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
  );
};

export default LeftSide;
