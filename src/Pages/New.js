import React from 'react'
import NewSong from '../Components/NewSong'
import NewVideo from '../Components/NewVideo'
import { Link } from 'react-router-dom'

export default function New() {

   

    return (
        <div>
            <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
             </Link>
            <h2>New </h2>
            <NewSong  />
            <NewVideo />
        </div>
    )
}
