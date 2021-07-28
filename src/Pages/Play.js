import React from 'react'
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"


export default function Play({song}) {
   
    return (
        <div>
            <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
             </Link>
            <h2>Aqui empieza todo</h2>
            <ReactPlayer url='https://i.scdn.co/image/ab67616d0000b273a840555c65ef9e53f90599c2' className='player'/>
         
           
        </div>
    )
}
