import React from 'react'
import { Link } from 'react-router-dom'

export default function EditSongs({songs}) {
    return (
        <div>
            <div>
               <Link to={`/songs`}>
                    <button className="songsbt">Back</button>
                </Link>
                <div>
                    <form>
                        <input type=""></input>
                        <input type=""></input>
                        <input type=""></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
