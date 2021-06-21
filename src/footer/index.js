import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import classes from './styles.module.css';

function Footer() {
  return (
    <section className={classes.wrapper}>
      <div>
        <h2><span>Fantasy</span>books</h2>
        <p>Egelykke 3, st.</p>
        <p>8000 Århus C.</p>
        <p className={classes.bold}>Telefon:</p>
        <p>13 34 56 78</p>
        <p className={classes.bold}>Mail:</p>
        <p>info@Fantasybooks.dk</p>
      </div>
      <div>
        <h4>Åbningstider:</h4>
        <p>Mandag - Fredag: 10.00 - 18.00</p>
        <p>Lørdag: 10.00 - 13.00</p>

        <p className={classes.socialHeader}>Følg os på sociale medier:</p>
        <div className={classes.social}>
          <a href="/">
            <FontAwesomeIcon icon={faFacebookSquare}/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
        </div>
      </div>
      <img src="images/footer.jpg" alt="Fantasybooks butik"/>
    </section>
  );
};

export default Footer;
