import React from 'react'
import {Link} from 'react-router-dom'

export default function MapingArtist({artis}) {
    return (
        <div>
            <Link to='/artist'>
            <div className="dentro">
                <div className="productCard">
                   <img src={artis.imagen} alt='new' className='artist'/>
                </div>
             </div>
             </Link>
        </div>
    )
}
