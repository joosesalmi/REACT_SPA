import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
 
function Yhteys() {
    return (
      <div>
        <h2>Yhteyden otot</h2>
        <p>Helpoin tapa lähettää sähköpostia <a href="http://forum.abcabc.com">foorumille</a>.
        </p>
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> <a href="">facebookkitili</a><br/>
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" /> <a href="">instagrammi</a><br/>
        <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> <a href="">Xtili</a>
      </div>
    );
  }
 
export default Yhteys;
