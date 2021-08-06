import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import { apiURL } from "../Back-end/apiURl";
import { Link } from 'react-router-dom'

const API_DTBASE = apiURL()

export default function NewSong() {
   
    const history = useHistory();
    const [songs, setSongs ] = useState({
        name: '',
        artist: '', 
        album: '', 
        photo: '',
        time: '',
        url: '',
        is_favorite: false,
    })

    const handleInput = (e)=> {
        const {value} = e.target
        setSongs({...songs, [e.target.id]: value})
    }
    const handleSubmit =(e)=> {
        e.preventDefault()
        addSongs(songs)
     }
    const handleCheck =()=> {
        setSongs({...songs, is_favorite : !songs.is_favorite })
    }
    const addSongs = (new_song)=> {
        axios.post(`${API_DTBASE}/songs`, new_song).then((res)=>{
          history.push('/songs')
        })
      }
    


    return (
        <div>
            <h2>New Song</h2>
            <form action="" onSubmit={handleSubmit}>
               <label htmlFor="name"></label>
               <input id="name" type="text" onChange={handleInput} placeholder="Name..."></input>
               <label htmlFor="artist"></label>
               <input id="artist" type="text" onChange={handleInput} placeholder="Artist..."></input>
               <label htmlFor="album"></label>
               <input id="album" type="text" onChange={handleInput} placeholder="Album..."></input>
               <label htmlFor="photo"></label>
               <input id="photo" type="text" onChange={handleInput} placeholder="Link..."></input>
               <label htmlFor="time"></label>
               <input id="time" type="text" onChange={handleInput} placeholder="Time..."></input>
               <label htmlFor="url"></label>
               <input id="url" type="text" onChange={handleInput} placeholder="Url..."></input>
               <label htmlFor="is_favorite"></label>
               <input id="is_favorite" type="checkbox" onChange={handleCheck} ></input>
               <button type="submit">New</button>
            </form>
        </div>
    )
}
