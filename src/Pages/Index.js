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
               <Link to="/songs/library" className="librarylink"><p className="library">🎧 Your Library</p></Link>
               <div>
                <p className="library2"><img src={plus} alt="img" className="plus"></img>Create Playlist</p>
                <p className="library2"><img src={plus2} alt="img" className="plus"></img> Favorite Songs</p>
               </div>
               <Playlist />
            </div>
           
            <Filters songs={songs} className="filters"/>
            
        </div>
    )
}
