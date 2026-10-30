import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import { divIcon } from "leaflet";
import { FaArrowRightLong } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";

const LocationMap = ({
  latitude = 36.2083,
  longitude = -115.9839,
  locationName = "Marci Metzger - The Ridge Realty Group",
  address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States",
}) => {
  const position = [latitude, longitude];

  const customIcon = divIcon({
    className: "custom-map-marker",
    html: '<span class="marker-pin"></span>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div className="location-map">
      <MapContainer
        key={`${latitude}-${longitude}`}
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={20}
        />

        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="map-popup">
              <strong>{locationName}</strong>
              <p>{address}</p>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                Get Directions <FaArrowRightLong />
              </a>
            </div>
          </Popup>
        </Marker>

        <ZoomControl position="topright" />
      </MapContainer>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="directions-button"
      >
        GET DIRECTIONS
        <FaArrowRightLong />
      </a>
    </div>
  );
};

export default LocationMap;
