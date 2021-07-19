import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <h2>
                <h1>Songs</h1>
                <Link to="/songs">Play me</Link>
            </h2>
            <form className="form">
                <input className="input" placeholder="🔍..."></input>
                <button className="inputBtn">Search</button>
            </form>
            <Link to="/songs/new">
               <button className="button">New Music</button>
            </Link>
            
        </div>
    )
}
