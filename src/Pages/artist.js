import React from 'react'
import Band from '../ArtistComponent/Band'

export default function artist({artist}) {
    return (
        <div className="container-Art">
            {artist.map((one) => {
              return (
                <Band todo={one} id={one.id} key={one.id} />
              );
            })}
        </div>
    )
}
