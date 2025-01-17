import { useState } from "react";
import React from "react";
import YouTube from "react-youtube";

function Tarina() {
  const [video, setVideo] = useState (null);

  const onReady = (event) => {
    setVideo(event.target); // Tallentaa YouTube-playerin, jotta voimme käsitellä sitä myöhemmin
  };
  
  const onEnd = (event) => {
    event.target.seekTo(0); // Siirtää videon alkuun
    event.target.playVideo();
  }
   

  const jumpToTime = (timeInSeconds) => {
    if (video) {
      video.seekTo(timeInSeconds, true); // Hyppää tiettyyn kohtaan ja toistaa videon siitä
      video.pauseVideo(); // Varmistaa, että video alkaa toistamaan
    }
  };

  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

    return (
      <div>
        <h2>Tarina</h2>
        <p>Rotan kuvakulmat</p>
        <ol>
          <li><button onClick={() => jumpToTime(6)}>Rat facing you</button></li>
          <li><button onClick={() => jumpToTime(4)}>Rat sideways</button></li>
          <li><button onClick={() => jumpToTime(2)}>Rat back facing you</button></li>
          <li><button onClick={() => jumpToTime(0)}>Rat the other way sideways</button></li>
        </ol>
  
      <YouTube videoId="3X-iqFRGqbc" options={options} onReady={onReady} onEnd={onEnd} id="video"/>;

      </div>
    );
  }
 
export default Tarina;
