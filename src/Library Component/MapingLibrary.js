import React from 'react'

export default function MapingLibrary({ song, id }) {
    return (
        <div>
            <h2>{song.name}</h2>
            <img src={song.photo} alt={song.artist}/>
            <h2>{song.artist}</h2>
            <h2>{song.time}</h2>
            <h2>{song.album}</h2>  
        </div>
    )
}
