import React from 'react'
import NewSong from '../Components/NewSong'

export default function New(addSongs) {
    return (
        <div>
            <h2>New </h2>
            <NewSong  addSongs={addSongs}/>
        </div>
    )
}
