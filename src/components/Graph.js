import {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Graph(assetOfInterest) {
    const [apiData, setApiData] = useState([]);
    const [apiLabels, setApiLabels] = useState([]);
    


  const [data, setData]= useState({
    labels:[],
    datasets:[
      {
        label:"Fuel Volume",
        data:[],
        backgroundColor:'gold',
        borderColor:'maroon',
        tension:0.5,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })

  useEffect(()=>{
  fetch("http://0.0.0.0:3000/assets")
    .then(response => response.json())
    .then(apiData => {
  //
     // const data = apiData.map(assets => assets.measurement.history[0].FuelVolume);
      //const labels = apiData.map(assets => assets.measurement.history[2].measurementDate);

      const data = apiData.map(assets => assets.measurement.history.map(history => history.FuelVolume)).flat();
      const labels = apiData.map(assets => assets.measurement.history.map(history => history.measurementDate)).flat();

//
      setData({
        labels,
        datasets:[
          {
            label: "Fuel Volume",
            data,
            backgroundColor: 'gold',
            borderColor: 'maroon',
            tension: 0.5,
            fill: true,
            pointStyle: 'rect',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            showLine: true
          }
        ]
      });
    })
    .catch(err => console.log(err))
},[]);

    
  return (
    <div className="App" style={{width:'800px', height:'800px'}}>
      <Line data={data}>Dataset</Line>
    </div>
  );
}

export default Graph;