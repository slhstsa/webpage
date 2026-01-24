import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "./Map.css";

const containerStyle = {
  width: '100%',
  height: '700px'
};

// Default center coordinates (Katy, TX)
const center = {
  lat: 29.7858,
  lng: -95.8245
};

function Map() {
  const [loadError, setLoadError] = useState(null);

  const onLoad = useCallback(function callback(map) {
    console.log('Map loaded successfully');
    setLoadError(null);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    console.log('Map unmounted');
  }, []);

  const onError = useCallback(function callback(error) {
    console.error('Google Maps error:', error);
    setLoadError(error);
  }, []);

  return (
    <div className="map-container">
      <h1>Explore Katy</h1>
      <div className="map-wrapper">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
          onError={onError}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker
              position={center}
              title="Katy, TX"
            />
          </GoogleMap>
        </LoadScript>
      </div>
      {!process.env.REACT_APP_GOOGLE_MAPS_API_KEY && (
        <p className="api-key-note">
          Note: Add your Google Maps API key to a .env file as REACT_APP_GOOGLE_MAPS_API_KEY for the map to load.
        </p>
      )}
      {loadError && (
        <div className="error-note">
          <h3>Google Maps Error</h3>
          <p><strong>Error:</strong> {loadError.message || 'Unknown error'}</p>
          <p><strong>Troubleshooting Steps:</strong></p>
          <ol>
            <li>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
            <li>Enable the <strong>Maps JavaScript API</strong> in APIs & Services → Library</li>
            <li>Check your API key restrictions in APIs & Services → Credentials</li>
            <li>Ensure billing is enabled on your project</li>
            <li>Verify your API key is correct</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default Map;