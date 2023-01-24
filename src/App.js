import React, {useState} from 'react';
import Map from './components/Map'
// import Header from './components./Header'
// import QuickView from './components/QuickView'
// import Graph from './components/Graph'
// import NotesList from './components/Noteslist'
// import Footer from './components/Footer'

function App() {
  // eslint-disable-next-line
  const [assetOfInterest, setAssetOfInterest] = useState(null);
  return (
    <div >
      {/* <Header /> */}
      <div className="w3-row-padding">
        <div className="w3-container w3-twothird">
        <Map setAssetOfInterest={setAssetOfInterest}/>
        </div>
        <div className="w3-container w3-third">
          {/* <Quickview assetOfInterest={assetOfInterest}/> */}
        </div>
      </div>
      <div className="w3-row-padding">
        <div className="w3-container w3-twothird">
          {/* <Graph assetOfInterest={assetOfInterest}/> */}
        </div>
        <div className="w3-container w3-third">
          {/* <NotesList assetOfInterest={assetOfInterest} /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
