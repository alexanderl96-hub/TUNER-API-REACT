import React from 'react'
import { useState , useEffect} from "react";
import { useParams, useHistory } from "react-router-dom"
import axios from "axios";
import { apiURL } from "../Back-end/apiURl";
import { Link } from 'react-router-dom'

const API_DTBASE = apiURL()


export default function EditSongs(props) {
    const {id} = useParams()
    const history = useHistory();
    const [valt, setValt] = useState([])

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
    const handleCheck =()=> {
        setSongs({...songs, is_favorite : !songs.is_favorite })
    }
    useEffect(()=>{
        axios.get(`${API_DTBASE}/songs/${id}`).then((res)=>{
            const {data} = res
            setValt(data)
        }).catch(()=>{
            history.push('/not-found')
        })
    }, [id, history])

    const handleSubmit =(e)=> {
        e.preventDefault()
        const  prim = {...songs, ...valt}
        props.updateSongs(prim, id)
        history.push(`/songs/${id}`)
     }
   
    return (
        <div>
            <div>
               <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
                </Link>
                <div>
                <form  onSubmit={handleSubmit}>
               <label htmlFor="name"></label>
               <input id="name" type="text" onChange={handleInput} placeholder={valt.name}></input>
               <label htmlFor="artist"></label>
               <input id="artist" type="text" onChange={handleInput} placeholder={valt.artist}></input>
               <label htmlFor="album"></label>
               <input id="album" type="text" onChange={handleInput} placeholder={valt.album}></input>
               <label htmlFor="photo"></label>
               <input id="photo" type="text" onChange={handleInput} placeholder={valt.photo}></input>
               <label htmlFor="time"></label>
               <input id="time" type="text" onChange={handleInput} placeholder={valt.time}></input>
               <label htmlFor="mp3"></label>
               <input id="mp3" type="text" onChange={handleInput} placeholder={valt.mp3}></input>
               <label htmlFor="is_favorite"></label>
               <input id="is_favorite" type="checkbox" onChange={handleCheck} ></input>
               <button type="submit">New</button>
            </form>
            <div className="songs_photo">
                <img src={songs.photo ? songs.photo : null} alt={songs.photo} style={{width:"350px", height:"320px"}}  className="photo"/>
            </div>
                </div>
            </div>
        </div>
    )
}
