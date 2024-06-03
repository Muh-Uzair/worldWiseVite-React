import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "../Map/Map.module.css";
import { CitiesContext } from "../../../../ContextApp";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useGeolocation } from "../../../../hooks/useGeolocation";
import { useTakeLatLngParams } from "../../../../hooks/useTakeLatLngParams";

import LogoutCmp from "./LogoutCmp";

export default function Map() {
  const { citiesData, currCity } = useContext(CitiesContext);
  const [mapPosition, setMapPosition] = useState([80, 92]);
  const {
    isLoading: isLoadingGeoLocation,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();
  const [lat, lng] = useTakeLatLngParams();

  useEffect(
    function () {
      if (lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      function setPosWithGeoLocation() {
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
      if (geoLocationPosition) setPosWithGeoLocation();
    },
    [geoLocationPosition]
  );

  return (
    <div className={styles.divMap}>
      <LogoutCmp />
      {!geoLocationPosition && (
        <button className={styles.buttonUseYourPosition} onClick={getPosition}>
          {isLoadingGeoLocation ? "LOADING..." : "USE YOUR POSITION"}
        </button>
      )}
      <MapContainer
        className={styles.actualMap}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        key={currCity.id}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {citiesData.map((val, i) => (
          <Marker position={[val.position.lat, val.position.lng]} key={i}>
            <Popup>
              <span className={styles.countryEmoji}>{val.emoji}</span>
              <span className={styles.textCityName}>{val.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangePosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

ChangePosition.propTypes = {
  position: PropTypes.array,
};
function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
