import React, {Fragment} from "react";

function QuickView ({assetOfInterest}){
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Asset name: {assetOfInterest === null? "Null" : assetOfInterest.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" >Latitude: {assetOfInterest === null? "Null" : assetOfInterest.location.lat}</li>
                        <li className="list-group-item" >Longitude: {assetOfInterest === null? "Null" : assetOfInterest.location.lon}</li>
                        <li className="list-group-item">Current Fuel Volume: {assetOfInterest === null? "Null" : `${assetOfInterest.measurement.currentFuelVolume} ${assetOfInterest.measurement.containerVolumeUnits}`}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default QuickView