import React from "react";

function QuickView ({assetOfInterest}){
    console.log(assetOfInterest);

    return (
        <>
        {assetOfInterest === null? null : (
                                        <div className="card" style={{width: "18rem"}}>
                                                <img src={assetOfInterest.imageLink} alt="no lpg" height="220px" style={{paddingLeft: "90px"}}/>
                                            <div className="card-body" >
                                                <h5 >Asset name: {assetOfInterest.name}</h5>
                                                <h5>Batch: {assetOfInterest.product.batch}</h5>
                                                <h5>Current Volume: {assetOfInterest.measurement.containerVolume}</h5>
                                                <h5>Current Volume: {assetOfInterest.measurement.currentFuelVolume}</h5>
                                            </div>
                                        </div>
                                        )}
    </>
    )
}

export default QuickView