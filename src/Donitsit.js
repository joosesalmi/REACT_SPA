import React, { useState, useEffect } from 'react'; // Tuodaan React-kirjasto sekä useState ja useEffect hookit
import './Donitsit.css'; // Tuodaan App-komponentin tyylitiedosto

function Donitsit() {
  // Tila, jossa säilytetään donitsien data, alustetaan tyhjänä taulukkona
  const [donitsit, setDonitsit] = useState([]);

  // useEffect-hook, joka suoritetaan komponentin latautuessa ensimmäisen kerran
  useEffect(() => {
    fetch('./data.json') // Suoritetaan fetch-pyyntö, jolla haetaan tietoa data.json-tiedostosta
      .then(response => response.json()) // Muunnetaan saatu vastaus JSON-muotoon
      .then(data => setDonitsit(data.Donitsit)) // Päivitetään tila saadulla datalla
      .catch(error => console.error('Virhe ladata data:', error)); // Tulostetaan konsoliin mahdollinen virhe
  }, []); // Tyhjä riippuvuuslista tarkoittaa, että efekti suoritetaan vain kerran, komponentin mount-vaiheessa

  return (
    <div className="App">
      <header className="App-header">
        <h1>Donitsit</h1> {/* Otsikko donitsien näytölle */}
        {/* Käydään läpi donitsitaulukko ja luodaan jokaiselle donitsille elementit näyttöä varten */}
        {donitsit.map(donitsi => (
          <div key={donitsi.id}> {/* Jokainen donitsi saa uniikin avaimen sen id:stä */}
            <h2>{donitsi.nimi}</h2> {/* Näytetään donitsin nimi */}
            <img src={donitsi.img} alt={donitsi.nimi} /> {/* Näytetään donitsin kuva */}
            <p>Hinta per kpl: {donitsi.hinta} €</p> {/* Näytetään donitsin hinta */}
            <h3>Täytteet:</h3> {/* Otsikko täytteille */}
            <ul>
              {donitsi.taytteet.tayte.map(b => <li key={b.id}>{b.type}</li>)} {/* Listataan donitsin täytteet */}
            </ul>
            <h3>Lisätäyte:</h3> {/* Otsikko lisätäytteille */}
            <ul>
              {donitsi.lisatayte.map(t => <li key={t.id}>{t.type}</li>)} {/* Listataan donitsin lisätäytteet */}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Donitsit; // Viedään App-komponentti, jotta se on käytettävissä muualla sovelluksessa

