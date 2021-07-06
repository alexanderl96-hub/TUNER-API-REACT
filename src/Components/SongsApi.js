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
                    <h3>{songs.name}</h3>
                    <h3>{songs.artist}</h3>
                    <h3>{songs.album}</h3>
                    <h3>{songs.time}</h3>
                    <h3>{songs.url}</h3>
                    <h3>{songs.is_favorite}</h3>
                </div>
                

            </article>
        </div>
    )
}

export default withRouter(SongsApi)