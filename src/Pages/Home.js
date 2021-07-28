import React from 'react'
import {Link} from 'react-router-dom'

export default function Home({songs, id}) {
   
    return (
        <div>
            <Link to="/songs"><button className="home_btn">Login<span>🎼</span>Musica</button></Link>
        </div>
    )
}
