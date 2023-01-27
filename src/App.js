import React, {useState, useEffect} from 'react';
import Map from './components/Map'
// import Header from './components./Header'
// import QuickView from './components/QuickView'
// import Graph from './components/Graph'
import NotesList from './components/NotesList';
// import Footer from './components/Footer'

function App() {
  const mapHeightVar = "378px";
  // eslint-disable-next-line
  const [assetOfInterest, setAssetOfInterest] = useState(null);

  const debugOnClick = () => console.log("Clicked received - broadcasting this asset", assetOfInterest);
  useEffect(debugOnClick, [assetOfInterest]);
  return (
    <div >
      {/* <Header /> */}
      <div className="w3-row-padding">
        <div className="w3-card-4 w3-twothird">
          <Map setAssetOfInterest={setAssetOfInterest} mapHeightVar={mapHeightVar}/>
        </div>
        <div className="w3-card-4 w3-third">
          <QuickView assetOfInterest={assetOfInterest}/>
        </div>
      </div>
      <div className="w3-row-padding">
        <div className="w3-card-4 w3-twothird">
          <Graph assetOfInterest={assetOfInterest}/> 
        </div>
        <div className="w3-card-4 w3-third">
          <NotesList assetOfInterest={assetOfInterest} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
