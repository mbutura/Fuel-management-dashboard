import React, {useState, useEffect} from 'react';
import Map from './Map'
import Header from './Header'
import QuickView from './QuickView'
import Graph from './Graph'
// import NotesList from './components/NotesList';
import Footer from './Footer'

function Demo() {
  const mapHeightVar = "512px";
  // eslint-disable-next-line
  const [assetOfInterest, setAssetOfInterest] = useState(null);

  const debugOnClick = () => console.log("Clicked received - broadcasting this asset", assetOfInterest);
  useEffect(debugOnClick, [assetOfInterest]);
  return (
    <div>
        <Header />
        <div className="container shadow p-3 overflow-auto">
            <div className="p-3 text-bg-dark">
                <div className="container">
                    <h2 className="fs-4">Fuel asset map</h2>
                </div>
            </div>
            <Map setAssetOfInterest={setAssetOfInterest} mapHeightVar={mapHeightVar}/>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                    <QuickView assetOfInterest={assetOfInterest}/>
                </div>
                <div className="col-sm-8">
                    <Graph assetOfInterest={assetOfInterest}/> 
                </div>
            </div>
        </div>
          {/* <NotesList assetOfInterest={assetOfInterest} /> */}
      <Footer />
    </div>
  );
}

export default Demo;