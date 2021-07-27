import React from 'react'
import EditSongs from '../Components/EditSongs'

export default function Edit({songs}) {
    return (
        <div>
            <h1>Edit</h1>
            <EditSongs songs={songs}/>
        </div>
    )
}
