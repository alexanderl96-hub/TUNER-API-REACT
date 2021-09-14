import React from 'react'
import Playlist from 'react-mp3-player'
// import tracks from "../mp3Player"
import {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl"
import './AudioPlayer.module.css'

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
            {/* <Playlist tracks={songs} className='player'/> */}
            <div className="audioPlayer">
                <audio src='https://music.youtube.com/watch?v=hCK-N8cKtns&feature=share' preload="metadata"></audio>
                <button>back 10</button>
                <button>play / pause</button>
                <button>forward 10</button>

              {/* current time */}
              <div className="countCurrent">0:00</div>

              {/* progress bar */}
              <div>
                  <input type="range"  style={{ width: '1000px'}}/>
              </div>

              {/* duration */}
              <div className="fullCount">3:45</div>
  
            </div>
        </div>
    )
}
