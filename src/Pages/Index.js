import React from 'react'
import Filters from "../Components/Filters"
import { Link} from "react-router-dom"
import plus from "../images/add.png"
import plus2 from "../images/heart.png"
import Playlist from "../Components/Playlist"

export default function Index({songs}) {
    return (
        <div className="index">
            <h2>Index</h2>
            <div className="playlist">
                Playlist
                <form className="form">
                    <input className="input" placeholder="🔍..."></input>
                    <button className="inputBtn">Search</button>
                </form>
               <Link to="/songs/library" className="librarylink"><p className="library"><span>🎧 </span>Your Library</p></Link>
               <div>
                   <div className="create">
                       <img src={plus} alt="img" className="plus"></img>
                       <p className="library2">Create Playlist</p>
                   </div>
                    <div>
                        <img src={plus2} alt="img" className="plus"></img>
                        <p className="library2"> Favorite Songs</p>
                    </div>
               </div>
               <Playlist />
            </div>
            <Filters songs={songs} className="filters"/> 
        </div>
    )
}
