import { Link } from "react-router-dom"

export default function MapingSongs({ song, index}) {
    return (
        <div>
            
            <tr className="color">
                <div className="color">
                <td  className="box" >
                    <p className="income" >
                    { song.is_favorite? (<span>⭐️</span> ) 
                    : 
                    (<span>&nbsp; &nbsp; &nbsp;</span>)
                    }
                    </p>
                </td>
                <td  className="box" >
                    <p >
                    { song.name ?  song.name :  song.artist}
                    </p>
                </td>
                <td className="box" >
                    <Link to={`/songs/${index}`}>{song.album}</Link>
                </td>
                <td className="box" >
                    <p ><strong> By: {song.artist}</strong></p>
                </td>
                </div>
                
            </tr>
        </div>
    )
}
