import React, { useState } from "react";

function NotesList (){
    const [post, setPost]= useState ({
        imageLink: "",
        name: "",
        
    })


    function handleChange (e) {
        const key= e.target.name
        const value= e.target.value
        setPost({...post, [key]:value})
    }
    console.log(post);

    function handleSubmit (e) {
        e.preventDefault ()
        // fetch ("http://localhost:3000/assets", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify ()
        // })
        //     .then ((r)=> r.json ())
        //     .then ((data)=> console.log (data))
    }

    const style = {width: "100%", borderRadius: "20px", fontWeight: "bold"}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Image</label><br/>
                <input onChange={handleChange} name="imageLink" type="text" placeholder="Enter an image url" style={style}/><br/>
                <label>Name</label><br/>
                <input onChange={handleChange} name="name" type="text" placeholder="Enter name of the LPG asset" style={style}/><br/>
                <label>Container Volume</label><br/>
                <input onChange={handleChange} name="container volume" type="number" placeholder="Enter container volume" style={style}/><br/>
                <label>Current Volume</label><br/>
                <input onChange={handleChange} name="current volume" type="number" placeholder="Enter current LPG volume" style={style}/><br/>
                <label>Current location</label><br/>
                <input onChange={handleChange} name="longitude" type="number" placeholder="Enter current longitude" style={style}/><br/><br/>
                <input onChange={handleChange} name="latitude" type="number" placeholder="Enter current latitude" style={style}/><br/>
                <label>Product</label><br/>
                <input onChange={handleChange} name="batch" type="number" placeholder="Enter the batch number" style={{borderRadius: "20px"}}/>
                <input onChange={handleChange} name="sku" type="text" placeholder="Enter sku" style={{borderRadius: "20px", marginLeft: "35px"}}/><br/>
                <label>Comments</label><br/>
                <select onChange={handleChange} style={{borderRadius: "15px", paddingTop:"auto", width: "20%", height:"30px"}}>
                    <option></option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
                <input onChange={handleChange} type="text" textarea="" style={{borderRadius: "20px", marginLeft: "35px", height:"100px", width: "70%"}}/><br/><br/>
                <button onClick={handleSubmit} type="submit" style={{backgroundColor: "greenyellow", marginLeft: "180px", borderRadius: "20px", fontWeight: "600"}}>Submit</button>
            </form >
        </div>
    )
}

export default NotesList