import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Welcom to Nomy Fuels</h5>
                    <img src='https://purelpg.co.uk/wp-content/uploads/Pure-LPG-Small-Icon.jpg' alt="..."/>
                    <p className="card-text">Welcome to the Africa's leading industrial fuel management app powering logistics and energy</p>
                    {/* // eslint-disable-next-line  */}
                    <button className="btn btn-primary bg-dark">Learn more</button>
                </div>
            </div>
        </div>
        <div>
            <div class="card text-bg-dark">
                <img src="https://s3.amazonaws.com/s3-biz4intellia/images/meeting-the-industrial-needs-with-iot-powered-gas-monitoring-solution.jpg" class="card-img" alt="..."/>
            </div>
        </div>
        <Footer />
    </div>
  )
}