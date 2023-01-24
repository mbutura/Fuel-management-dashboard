import React, { useState, useEffect } from "react";
import L from "leaflet";

function Map({setAssetOfInterest, mapHeightVar}) {
  const [allAssets, setAllAssets] = useState(null);

  useEffect(fetchAssets, []);
  useEffect(showMap, [allAssets, setAssetOfInterest]);

  //Function will be hoisted
  function showMap(){
    //Handle leaflet issue with recreating DOM container
    let container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }
    //Focus on Nairobi, however this should be done in production using bounds
    let nairobiCenter = [-1.2920659, 36.8219461];
    let myMap = L.map("map").setView(nairobiCenter, 11);

    let baseMapLayer= L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    baseMapLayer.addTo(myMap);
    //Display markers only if there is asset data
    if(allAssets != null){
      allAssets.forEach(function (asset, assetIndex) {
        let marker = L.circleMarker([asset.location.lat, asset.location.lon],{"assetIndex": assetIndex})
        marker.on('click', (e) => {
          setAssetOfInterest(allAssets[e.target.options.assetIndex]);
        });
        let popup = L.popup().setContent("Current asset chosen");
        marker.bindPopup(popup);
        marker.addTo(myMap);
    });

    }


  }

  function fetchAssets(){
    fetch('http://localhost:3000/assets')
    .then((response) => response.json())
    .then((data) => setAllAssets(data));
  }

  return (<div id="map" style={{ width: "100%", height: mapHeightVar }}></div>);
}


export default Map;