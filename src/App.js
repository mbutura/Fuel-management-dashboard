import React, {useState, useEffect} from 'react';
import Map from './components/Map'
import Header from './components/Header'
//import QuickView from './components/QuickView'
// import Graph from './components/Graph'
// import NotesList from './components/NotesList';
import Footer from './components/Footer'

function App() {
  const mapHeightVar = "512px";
  // eslint-disable-next-line
  const [assetOfInterest, setAssetOfInterest] = useState(null);

  const debugOnClick = () => console.log("Clicked received - broadcasting this asset", assetOfInterest);
  useEffect(debugOnClick, [assetOfInterest]);
  return (
    <div >
      <Header />
      <Map setAssetOfInterest={setAssetOfInterest} mapHeightVar={mapHeightVar}/>
      {/* <br/>
      <div className="row">
        <div className="col-sm-4"> */}
          {/* <QuickView assetOfInterest={assetOfInterest}/> */}
        {/* </div>
      </div> */}
          {/* <Graph assetOfInterest={assetOfInterest}/> 
          <NotesList assetOfInterest={assetOfInterest} /> */} */
      <Footer />
    </div>
  );
}

export default App;
