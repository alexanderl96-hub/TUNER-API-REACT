import React from 'react'
import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import { apiURL } from "../Back-end/apiURl";


const API_DTBASE = apiURL()

 function SongsApi() {
  
    const [ songs, setSongs ] = useState([])
    let { id } = useParams()
    let history = useHistory()

    const handleDelete = () => {
        axios.delete(`${API_DTBASE}/songs/${id}`).then(() =>{
            history.push(`/songs`)
        }, (error) => console.log(error))
    };

    useEffect(()=>{
        axios.get(`${API_DTBASE}/songs/${id}`).then((res)=>{
            const {data} = res
            setSongs(data)
        }).catch((e)=>{
            history.push('/not-found')
        })
    },[id, history])

    


    return (
        <div>
            <div>
                <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
                </Link>
                <Link to={`/songs/${id}/edit`}>
                    <button className="songsbt">Edit</button>
                </Link>
                <Link to={`/songs`}>
                    <button onClick={handleDelete} className="songsbt">Delete</button>
                </Link>

            </div>
            <div className="imgname">
                <img src={songs.photo} alt="my-pho" className="coverimg"/>
                <h2>{songs.name}</h2>
                <Link to={`/songs/${id}/play`} ><a href={songs.mp3} ><h3 className="playbtn">▶️</h3></a></Link>
            </div>
            <div className="details">
                <h2> Artist: {songs.artist}</h2>
                <h2> Album: {songs.album}</h2>
                <h2> Time: {songs.time}</h2>
                <h2>Favorite: {songs.is_favorite ? (<span>❤️</span> ) : (<span>🤍</span> )}</h2>
            </div>
        </div>
    )
}

export default withRouter(SongsApi)