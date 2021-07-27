import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <h2>
                <Link to="/"><h1>🎼Tones</h1></Link>
            </h2>
            
            <Link to="/songs/new">
               <button className="button">New Music</button>
            </Link>
            
        </div>
    )
}
