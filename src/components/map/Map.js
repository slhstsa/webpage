import React, { useEffect, useState, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import resourcesData from "../../data/resources.json";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Default center coordinates: 29°47'40.3"N 95°49'29.1"W (Katy, TX)
// 29.939345, -95.304114
const center = [29.730367, -95.578197];

function MapEventHandler({ onBoundsChange, isZoomingRef, mapRef }) {
  const map = useMap();

  useEffect(() => {
    if (mapRef) {
      mapRef.current = map;
    }

    const updateBounds = () => {
      if (isZoomingRef.current) {
        return;
      }
      const bounds = map.getBounds();
      onBoundsChange(bounds);
    };

    const timeoutId = setTimeout(() => {
      updateBounds();
    }, 100);

    map.on("moveend", updateBounds);
    map.on("zoomend", updateBounds);

    return () => {
      clearTimeout(timeoutId);
      map.off("moveend", updateBounds);
      map.off("zoomend", updateBounds);
    };
  }, [map, onBoundsChange, isZoomingRef, mapRef]);

  return null;
}

function Map() {
  const [resources, setResources] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [visibleResources, setVisibleResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const isZoomingRef = useRef(false);
  const markerRefs = useRef({});

  useEffect(() => {
    const validResources = resourcesData.filter(
      (resource) =>
        resource.address &&
        resource.address !== "Online/Multiple locations" &&
        resource.address !== "Online/Phone-based" &&
        resource.status === "active" &&
        resource.lat &&
        resource.lng,
    );

    setResources(validResources);

    const markers = validResources
      .filter((resource) => !isNaN(resource.lat) && !isNaN(resource.lng))
      .map((resource) => ({
        position: [resource.lat, resource.lng],
        resource: resource,
      }));

    setMarkers(markers);
    markersRef.current = markers;
    setLoading(false);
  }, []);

  const handleBoundsChange = useCallback((bounds) => {
    const visible = markersRef.current
      .filter((marker) => {
        const lat = marker.position[0];
        const lng = marker.position[1];
        return bounds.contains([lat, lng]);
      })
      .map((marker) => marker.resource);

    setVisibleResources(visible);
  }, []);

  const handleResourceClick = (resource) => {
    if (!mapRef.current) return;

    isZoomingRef.current = true;

    const map = mapRef.current;

    map.once("moveend", () => {
      const marker = markerRefs.current[resource.id];
      if (marker) {
        marker.openPopup();
      }
      isZoomingRef.current = false;
    });

    map.flyTo([resource.lat, resource.lng], 16, {
      animate: true,
      duration: 0.8,
    });
  };

  return (
    <div className="map-container">
      <h1>Explore Katy Resources</h1>
      {loading && (
        <div className="loading-note">
          <p>Loading map...</p>
        </div>
      )}
      {error && (
        <div className="error-note">
          <h3>Error Loading Map</h3>
          <p>{error}</p>
        </div>
      )}
      <div className="map-layout">
        <div className="map-wrapper">
          <MapContainer
            center={center}
            zoom={11}
            style={{ height: "70vh", minHeight: "420px", width: "100%" }}
            scrollWheelZoom={true}
            tap={true}
            touchZoom={true}
            dragging={true}
            zoomControl={true}
          >
            <MapEventHandler
              onBoundsChange={handleBoundsChange}
              isZoomingRef={isZoomingRef}
              mapRef={mapRef}
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
              <Marker
                key={marker.resource.id || index}
                position={marker.position}
                ref={(ref) => {
                  if (ref && marker.resource.id) {
                    markerRefs.current[marker.resource.id] = ref;
                  }
                }}
              >
                <Popup>
                  <div className="popup-content">
                    <h3>{marker.resource.name}</h3>
                    <p>
                      <strong>Category:</strong> {marker.resource.category}
                    </p>
                    <p>
                      <strong>Address:</strong> {marker.resource.address}
                    </p>
                    {marker.resource.phone && (
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a href={`tel:${marker.resource.phone}`}>
                          {marker.resource.phone}
                        </a>
                      </p>
                    )}
                    {marker.resource.website && (
                      <p>
                        <strong>Website:</strong>{" "}
                        <a
                          href={marker.resource.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </p>
                    )}
                    {marker.resource.description && (
                      <p className="description">
                        {marker.resource.description}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="resources-sidebar">
          <div className="sidebar-header">
            <h2>Resources in View</h2>
            <span className="resource-count">
              {visibleResources.length} visible
            </span>
          </div>
          <div className="resources-list">
            {visibleResources.length === 0 ? (
              <div className="no-resources">
                <p>
                  No resources in current view. Pan or zoom the map to see
                  resources.
                </p>
              </div>
            ) : (
              visibleResources.map((resource) => (
                <div
                  key={resource.id}
                  className="resource-card"
                  onClick={() => handleResourceClick(resource)}
                  title="Click to zoom to this resource"
                >
                  <h3 className="resource-card-title">{resource.name}</h3>
                  <p className="resource-card-category">{resource.category}</p>
                  <p className="resource-card-address">{resource.address}</p>
                  {resource.phone && (
                    <p className="resource-card-phone">
                      <a href={`tel:${resource.phone}`}>{resource.phone}</a>
                    </p>
                  )}
                  {resource.website && (
                    <p className="resource-card-website">
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </p>
                  )}
                  {resource.description && (
                    <p className="resource-card-description">
                      {resource.description}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
