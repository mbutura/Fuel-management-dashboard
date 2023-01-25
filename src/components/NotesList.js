import React, { useState } from "react";

function NotesList (){
    const [post, setPost]= useState ({
        id: "",
        image: "",
        name: "",
        containerVolume: "",
        currentVolume: "",
        location: {
            longitude: "",
            latitude: "",
        },
        batch: "",
        sku: "",
        comments: {
            user: "",
            text: ""
        }
    })

    function handleChange (e) {
        const key= e.target.name
        const value= e.target.value
        setPost({...post, [key]:value})
    }

    function handleSubmit (e) {
        e.preventDefault ();
        fetch ("http://localhost:3000/assets", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify (post)
        })
            .then ((response)=> response.json ())
            .then ((data)=> {
                console.log (data);
                setPost({
                    image: "",
                    name: "",
                    containerVolume: "",
                    currentVolume: "",
                    location: {
                        longitude: "",
                        latitude: "",
                    },
                    batch: "",
                    sku: "",
                    comments: {
                        user: "",
                        text: ""
                    }
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const style = {width: "100%", borderRadius: "20px", fontWeight: "bold"}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Image</label><br/>
                <input onChange={handleChange} name="image" type="text" value={post.image} placeholder="Enter an image url" style={style}/><br/>
                <label>Name</label><br/>
                <input onChange={handleChange} name="name" type="text" value={post.name} placeholder="Enter name of the LPG asset" style={style}/><br/>
                <label>Container Volume</label><br/>
                <input onChange={handleChange} name="containerVolume" type="number" value={post.containerVolume} placeholder="Enter container volume" style={style}/><br/>
                <label>Current Volume</label><br/>
                <input onChange={handleChange} name="currentVolume" type="number" value={post.currentVolume} placeholder="Enter current LPG volume" style={style}/><br/>
                <label>Current location</label><br/>
                <label>Longitude</label><br/>
                <input onChange={(e) => setPost({...post, location: {longitude: e.target.value, latitude: post.location.latitude}})} type="number" value={post.location.longitude} placeholder="Enter current longitude" style={style}/><br/><br/>
                <label>Latitude</label><br/>
                <input onChange={(e) => setPost({...post, location: {longitude: post.location.longitude, latitude: e.target.value}})} type="number" value={post.location.latitude} placeholder="Enter current latitude" style={style}/><br/>
                <label>Product</label><br/>
                <input onChange={handleChange} name="batch" type="number" value={post.batch} placeholder="Enter the batch number" style={{borderRadius: "20px"}}/>
                <input onChange={handleChange} name="sku" type="text" value={post.sku} placeholder="Enter sku" style={{borderRadius: "20px", marginLeft: "35px"}}/><br/>
                <label>Comments</label><br/>
                <select onChange={(e) => setPost({...post, comments: {user: e.target.value, text: post.comments.text}})} style={{borderRadius: "15px", paddingTop:"auto", width: "20%", height:"30px"}}>
                <option value=""></option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                </select>
                <input onChange={(e) => setPost({...post, comments: {user: post.comments.user, text: e.target.value}})} type="text" value={post.comments.text} placeholder="Enter comments" style={{borderRadius: "20px", marginLeft: "35px"}}/><br/><br/>
                <input type="submit" value="Submit" style={{width:"20%", borderRadius: "20px", backgroundColor:"#2196F3", color:"white"}}/>
            </form>
        </div>
    )
}

export default NotesList;

