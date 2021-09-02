import React from 'react'

export default function MapingArtist({artis}) {
    return (
        <div>
            <div className="dentro">
                <div className="productCard">
                   <img src={artis.imagen} alt='new' className='artist'/>
                </div>
             </div>
        </div>
    )
}
