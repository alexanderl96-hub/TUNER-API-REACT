import React from 'react'

export default function MapingVideo({video, id}) {
    return (
        <div>
            <tr>
               <a href={video.video} alt="viedo">Play me</a>
            </tr>
        </div>
    )
}
