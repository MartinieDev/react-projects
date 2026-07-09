import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';

function Map() {
  const { cities } = useCities();
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geoLoacationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition()


  // console.log(mapLat, mapLng, geoLoacationPosition);

  useEffect(
    function () {
      // mapLat/mapLng become null & the condition fails so we do NOT update state
      if (mapLat && mapLng) setMapPosition([Number(mapLat), Number(mapLng)]);
      console.log(mapLat, mapLng);
    },
    [mapLat, mapLng],
  );

  useEffect(
    function () {
      if (geoLoacationPosition)
        setMapPosition([geoLoacationPosition.lat, geoLoacationPosition.lng]);
    },
    [geoLoacationPosition],
  );

  return (
    <div className={styles.mapContainer}>
      {!geoLoacationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your position'}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        {geoLoacationPosition && (
          <Marker
            position={[geoLoacationPosition.lat, geoLoacationPosition.lng]}
          >
            <Popup>Your current location</Popup>
          </Marker>
        )}

        <ChangeCenter position={mapPosition} />
        <DetectClicks />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClicks() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
