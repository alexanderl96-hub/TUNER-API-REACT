import React from 'react'
import { Link } from 'react-router-dom'

export default function NewSong() {
    return (
        <div>
            <h2>New Song</h2>
            <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
             </Link>
        </div>
    )
}
