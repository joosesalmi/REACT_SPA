import React from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Kartta () {
    return(
        <div>
        <h1>Leaflet kartta</h1>
        <MapContainer center={[62.605079, 29.741751]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
        </div>
    )
};

export default Kartta;