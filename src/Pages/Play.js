import React from 'react'
import ReactPlayer from 'react-player'
import {useEffect, useState} from 'react'
import {Link,useParams } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl"

const API_DTBASE = apiURL()

export default function Play() {
    const {id} = useParams()
    const [songs, setSong]= useState({})

    useEffect(()=>{
        axios.get(`${API_DTBASE}/songs/${id}`).then((res)=>{
            const { data } = res
            setSong(data.mp3)
        })
    })

  console.log(songs) 
    return (
        <div className="show">
            <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
             </Link>
            <h2 className='player'>Aqui empieza todo</h2>
            <ReactPlayer url={songs} className='player'/>
        </div>
    )
}
