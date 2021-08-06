import React from 'react'
import MapingVideo from "./MapingVideo"

export default function Video({video}) {
    return (
        <div>
            <tbody>{video.map((vid)=> {
                    return <MapingVideo video={vid} id={vid.id} key={vid.id}/>
                })}</tbody>
        </div>
    )
}
