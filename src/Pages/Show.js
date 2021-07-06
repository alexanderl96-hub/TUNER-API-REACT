import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import SongsApi from "../Components/SongsApi"

export default function Show({song}) {
    const {id} = useParams()
    const [songs] = useState(song[id])
    return (
        <div>
            <h2>Show</h2>
            <section>
                <SongsApi songs={songs} id={id} />
            </section>
        </div>
    )
}
