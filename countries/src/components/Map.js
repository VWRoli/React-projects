import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ latlng, name }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="map-container">
      {showMap ? (
        <MapContainer
          center={latlng}
          zoom={3}
          scrollWheelZoom={true}
          className="map-container"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={latlng}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="map-placeholder">
          <button className="show-map-btn" onClick={() => setShowMap(!showMap)}>
            Show map
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;
