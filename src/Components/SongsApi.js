import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import { apiURL } from "../Back-end/apiURl";


const API_DTBASE = apiURL()

 function SongsApi() {

    const [ songs, setSongs ] = useState([])
    let {id} = useParams()
    let history = useHistory()

    useEffect(()=>{
        axios.get(`${API_DTBASE}/songs/${id}`).then((res)=>{
            const {data} = res
            setSongs(data)
        }).catch((e)=>{
            history.push('/not-found')
        })
    })
    return (
        <div>
            <article>
                <div>
                    <Link to={`/songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <img src={songs.photo} alt="my-pho" className="coverimg"/>
                    <h3>{songs.name}</h3>
                    <h3>Favorite: {songs.is_favorite ? (<span>❤️</span> ) : (<span>🤍</span> )}</h3>
                    <h3> Artist: {songs.artist}</h3>
                    <h3> Album: {songs.album}</h3>
                    <h3>{songs.time}</h3>
                    <a href={songs.url}>{songs.url}</a>
                </div>
                

            </article>
        </div>
    )
}

export default withRouter(SongsApi)