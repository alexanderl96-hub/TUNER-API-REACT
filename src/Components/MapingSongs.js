import React from 'react'
import { Link } from "react-router-dom"

export default function MapingSongs({ song, id}) {
    return (
        <div>
            
            <tr >
                <div className="color">
                <Link to={`/songs/${id}`} className="maping">   
                <td  className="box" >
                    <p className="income" >
                   
                    { song.is_favorite? <span>⭐️</span>  
                    : 
                    <span>&nbsp; &nbsp; &nbsp;</span>
                    }
                    </p>
                </td>
                <td  className="box" >
                    <p>
                        {/* { song.name } */}
                    { song.name ?  song.name : null}
                    </p>
                </td>
                <td className="box" >
                   {song.album}
                </td>
                <td className="box" >
                    <p ><strong> {song.artist}</strong></p>
                </td>
                </Link>
                </div>
                
            </tr>
            
        </div>
    )
}
