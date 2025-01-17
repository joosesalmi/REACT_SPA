import React from 'react';  // Tuodaan React-kirjasto, joka on tarpeen komponentin luomiseksi
import PropTypes from 'prop-types';  // Tuodaan PropTypes, joka tarkistaa komponentille annettujen propsien tyypit
import './camera-selection.css';  // Tuodaan CSS-tyylitiedosto komponentin ulkoasun määrittelemiseksi

// Lista sääkameroista jotka on tuotu digittraffic API:sta
const cameras = [
    { presetId: '', name: '-' },  // Ensimmäinen valinta, tyhjä presetId
    { presetId: 'C0454801', name: 'Lielahti, Ylöjärvelle päin' },
    { presetId: 'C0454802', name: 'Lielahti, Tampereelle päin' },
    { presetId: 'C0460900', name: 'Rantatunnelin suu, itä' },
    { presetId: 'C0450702', name: 'Lakalaiva, Helsinkiin päin' },
    { presetId: 'C0450701', name: 'Lakalaiva, Vaasaan päin' },
    { presetId: 'C0854701', name: 'Tie 6 Joensuu, Reijola, Joensuuhun' },
    { presetId: 'C0854702', name: 'Tie 6 Joensuu, Reijola, Imatralle' },
    { presetId: 'C0851001', name: 'Tie 5 Kuopio, Vehmasmäki' },
    { presetId: 'C0853301', name: 'Tie 5 Siilinjärvi, Räimä' }
];

// CameraSelection-komponentti
const CameraSelection = ({ selectedPresetId, onSelect }) => {
    // Funktio, joka käsittelee kameran valinnan muutosta
    const selectionChanged = (event) => {
        console.log("Selected:" + event.target.value);  // Tulostaa valitun presetId:n konsoliin
        onSelect(event.target.value);  // Kutsuu onSelect-funktiota, joka päivittää valitun kameran tilan
    }

    return (
        <div className="Camera-selection-container">
            <div className="Camera-selection-text">
                Select camera to show:<br />
                <form>
                    {/* Valintaruutu, jossa voidaan valita kameran presetId */}
                    <select onChange={selectionChanged} value={selectedPresetId}>
                        {
                            // Käydään läpi kameralista ja luodaan jokaiselle kameralle option-elementti
                            cameras.map((cam, i) =>
                                <option
                                    key={'selection_' + i}  // Asetetaan uniikki key kaikille option-elementeille
                                    value={cam.presetId}>  {/* presetId on valinnan arvo */}
                                    {cam.name}  {/* Kameran nimi näkyy valintalistassa */}
                                </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    );
}

// Määritellään komponentin odotetut prop-tyypit
CameraSelection.propTypes = {
    selectedPresetId: PropTypes.string.isRequired,  // selectedPresetId on pakollinen string
    onSelect: PropTypes.func.isRequired  // onSelect on pakollinen funktio
}

export default CameraSelection;
