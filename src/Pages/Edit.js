import React from 'react'
import EditSongs from '../Components/EditSongs'

export default function Edit({songs, updateSongs}) {
    return (
        <div>
            <h1>Edit</h1>
            <EditSongs songs={songs} updateSongs={updateSongs}/>
        </div>
    )
}
