import React from 'react'
import { Link } from 'react-router-dom'

export default function EditSongs() {
    return (
        <div>
            <div>
               <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
                </Link>
            </div>
        </div>
    )
}
