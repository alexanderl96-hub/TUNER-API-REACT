import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import { apiURL } from "../Back-end/apiURl";

const API_DTBASE = apiURL()

export default function NewSong() {
   
    const history = useHistory();
    const [songs, setSongs ] = useState({
        name: '',
        artist: '', 
        album: '', 
        photo: '',
        time: '',
        mp3: '',
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
    
console.log(songs,'dfgdfgh')
    return (
        <div>
            <h2>New Song</h2>
            <form  onSubmit={handleSubmit}>
               <label htmlFor="name"></label>
               <input id="name" type="text" onChange={handleInput} placeholder="Name..." className="editform"></input>
               <label htmlFor="artist"></label>
               <input id="artist" type="text" onChange={handleInput} placeholder="Artist..." className="editform"></input>
               <label htmlFor="album"></label>
               <input id="album" type="text" onChange={handleInput} placeholder="Album..." className="editform"></input>
               <label htmlFor="photo"></label>
               <input id="photo" type="text" onChange={handleInput} placeholder="Link..." className="editform"></input>
               <label htmlFor="time"></label>
               <input id="time" type="text" onChange={handleInput} placeholder="Time..." className="editform"></input>
               <label htmlFor="mp3"></label>
               <input id="mp3" type="text" onChange={handleInput} placeholder="Mp3..." className="editform"></input>
               <label htmlFor="is_favorite"></label>
               <input id="is_favorite" type="checkbox" onChange={handleCheck} className="editform"></input>
               <button type="submit" className="editformbt">New</button>
            </form>
            <div className="songs_photo">
                <img src={songs.photo ? songs.photo : null} alt={songs.photo} style={{width:"350px", height:"320px"}}  className="photo"/>
            </div>
        </div>
    )
}

