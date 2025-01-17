import React from 'react'; 
import PropTypes from 'prop-types';

// CameraView-komponentti, joka esittää kameran kuvan presetId:n perusteella
const CameraView = ({ presetId }) => {
    return (
        <div className="Camera-selection-container">
            <img
                // Ladataan kuvan URL. Valitun kuvan määrittää presetID
                src={ `http://weathercam.digitraffic.fi/${presetId}.jpg`}  // Kuvan URL-osoite
                alt={ `Camera ${presetId}`}  // Kuvaus, joka näkyy, jos kuva ei lataudu
             />
        </div>
    );
}

// Määritellään komponentin odotettu prop-tyyppi
CameraView.propTypes = {
    presetId: PropTypes.string.isRequired  // presetId on pakollinen merkkijono
}

export default CameraView;
