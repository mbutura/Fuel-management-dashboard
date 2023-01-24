
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

function Map({setAssetOfInterest}){
  const defaultPosition: LatLngExpression = [-1.32311, 36.6927]; 

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;