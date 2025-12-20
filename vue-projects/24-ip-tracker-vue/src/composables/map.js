import L from 'leaflet';

export function createMap ({ lat, lng, iconUrl, mapId = 'map' }) {
  const map = L.map(mapId, { zoomControl: false }).setView([lat, lng], 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const mapIcon = L.icon({
    iconUrl,
    iconSize: [46, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });

  L.marker([lat, lng], { icon: mapIcon }).addTo(map);

  map.panBy([0, -120]); // Adjust map center to account for UI overlay

  return map;
};
