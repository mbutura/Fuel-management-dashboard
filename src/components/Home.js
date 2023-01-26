import React from "react";

function Home () {

    return (
        <div className="home">
            <div>
                <div class="card text-center">
                    <div class="card-header">
                        Track your LPG usage today
                    </div>
                    <div class="card-body">
                        <h1 class="card-title">Moringa LPG ltd</h1>
                        <p class="card-text" style={{textDecorationStyle: "none", fontSize: "20px"}}>
                        With the rising cost of electricity each and every day in Kenya, it is becoming  difficult for many urban homes in Kenya to use it for cooking.
                        Urban homes don’t usually have an option of using firewood because of it’s health problems due to excessive smoke or pollution to the environment. 
                        Kerosene is also not a good option due to its inefficiency and the mess it brings to the kitchen with all that strong kerosene smell. 
                        Putting all this factors together, it shows that the use of Gas (LPG) is the most reliable and cost effective means to prepare a meal in urban homes.
                        The Kenyan government has implemented several policies to promote adoption of LPG. Since 2016, LPG has been exempted from VATs imposed on other fuels. 
                        The government had also set up a program to distribute 6 kg cylinders and cookstoves at a subsidized price to low-income households. 
                        However, this program was suspended in 2018 following a court case involving fraudulent distribution of substandard equipment. 
                        In mid-2020, the court case was dropped and the program resumed, with the aim to distribute about 329,000 units that had been sitting in storage while the court order was in effect.
                        In 2020, a new Finance Bill was passed removing the VAT exemption for LPG. As of 1 July 2021, LPG will be subject to the standard 14% tax rate. 
                        Several officials including members of parliament have proposed further delaying reimposition of the tax, but as of this publication the change remains on the books.
                        </p>
                        <a href="https://www.spglobal.com/commodityinsights/en/ci/research-analysis/kenya-lpg-market-outlook.html" class="btn btn-primary">Discover more about LPG industry in Kenya</a>
                    </div>
                </div>
            </div>
            <div className="group" style={{marginLeft:"15%", marginTop: "2%"}}>
                <div class="card mb-3" style={{width: "1500px", borderRadius: "40px"}}>
                    <div className="row g-0" >
                        <div className="col-md-4">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQhVwnyVv3iHI8PyUUiQYl41sJ4Qy3wHWXKdEz3QOMRU48C2Gp6v3iqOT43otQqNJqic&usqp=CAU"} className="img-fluid rounded-start"  alt= "image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" >
                                <h2 className="card-text">Name: <small>Jesse Kichinda</small></h2>
                                <h2 className="card-text">Position: <small>Project Manager</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{width: "1500px", borderRadius: "40px"}}>
                    <div className="row g-0" style={{}}>
                        <div className="col-md-4">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQhVwnyVv3iHI8PyUUiQYl41sJ4Qy3wHWXKdEz3QOMRU48C2Gp6v3iqOT43otQqNJqic&usqp=CAU"} className="img-fluid rounded-start"  alt= "image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" >
                                <h2 className="card-text">Name: <small>Alois Mbutura</small></h2>
                                <h2 className="card-text">Position: <small>Managing Director</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{width: "1500px", borderRadius: "40px"}}>
                    <div className="row g-0" style={{}}>
                        <div className="col-md-4">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQhVwnyVv3iHI8PyUUiQYl41sJ4Qy3wHWXKdEz3QOMRU48C2Gp6v3iqOT43otQqNJqic&usqp=CAU"} className="img-fluid rounded-start"  alt= "image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" >
                                <h2 className="card-text">Name: <small>Loise Kimani</small></h2>
                                <h2 className="card-text">Position: <small>Main Contractor</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{width: "1500px", borderRadius: "40px"}}>
                    <div className="row g-0" style={{}}>
                        <div className="col-md-4">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQhVwnyVv3iHI8PyUUiQYl41sJ4Qy3wHWXKdEz3QOMRU48C2Gp6v3iqOT43otQqNJqic&usqp=CAU"} className="img-fluid rounded-start"  alt= "image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" >
                                <h2 className="card-text">Name: <small>Githinji Maxwell</small></h2>
                                <h2 className="card-text">Position: <small>Co-ordinating Manager</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home