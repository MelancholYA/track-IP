import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import TrackerIcon from "./styles/icon-location.svg";
const Map = ({ position }) => {
  var greenIcon = L.icon({
    iconUrl: TrackerIcon,
    iconSize: [50, 60], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  console.log(position);
  return (
    <MapContainer
      style={{
        height: "70vh",
        zIndex: 0,
      }}
      zoomControl={false}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={greenIcon} position={position}></Marker>
    </MapContainer>
  );
};

export default Map;
