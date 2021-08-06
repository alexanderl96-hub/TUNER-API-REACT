import React from 'react'
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"


export default function Play({song}) {
   
    return (
        <div className="show">
            <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
             </Link>
            <h2 className='player'>Aqui empieza todo</h2>
            <ReactPlayer url='https://music.youtube.com/watch?v=fYV2zXnvKWs&feature=share' className='player'/>
        </div>
    )
}
