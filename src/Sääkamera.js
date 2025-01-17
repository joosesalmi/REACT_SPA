import React, { useState} from 'react';  
import PropTypes from 'prop-types';  
import './Sääkamera.css';  
import CameraSelection from './CameraSelection/camera-selection';  
import CameraView from './CameraView/camera-view';  

// App-komponentti, joka toimii sovelluksen pääkomponenttina
const Sääkamera = () => {
  
  //Käytetään useState metodia selectedPresetId tilan hallintaan
  const [selectedPresetId, SetPreset] = useState('');  // Alustetaan tilaksi tyhjä merkkijono

  return (
    <div className="app">  {/* Pääsäiliö, joka pitää koko sovelluksen */}
      <div className="app-header">  {/* Yläosa, jossa on sovelluksen otsikko */}
        <h2>Traffic Camera Viewer</h2>  {/* Sovelluksen otsikko */}
      </div>
      
      {/* CameraSelection-komponentti, jossa käyttäjä voi valita kameran */}
      <CameraSelection
        selectedPresetId={selectedPresetId}  // Annetaan valittu presetId propina
        onSelect={(value) => SetPreset(value)}  // Kutsutaan SetPreset-funktiota, kun uusi presetId valitaan
      />
      
      {/* Jos selectedPresetId ei ole tyhjä, näytetään CameraView-komponentti kameran kuvan näyttämiseksi */}
      {selectedPresetId ? 
        <div className="camera-container">  {/* Kameraa esittävä kontaineri */}
          <CameraView presetId={selectedPresetId} />  {/* Näytetään kameran kuva presetId:n perusteella */}
        </div>
        : null  // Jos presetId on tyhjä, ei näytetä CameraView-komponenttia
      }
    </div>
  );
}

// Määritellään App-komponentin prop-tyypit
Sääkamera.propTypes = {
  selectedPresetId: PropTypes.string.isRequired  // selectedPresetId on pakollinen merkkijono
}

export default Sääkamera; 