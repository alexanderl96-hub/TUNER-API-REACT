import React from 'react'
import {Link} from 'react-router-dom'

export default function Home({songs, id}) {
    // useEffect(()=>{
    //     axios.get(``)
    // },[])
    return (
        <div>
            <Link to="/songs"><button className="home_btn">Login 🎼 Musica</button></Link>
            
            {/* <tbody>
                    {songs}
                </tbody> */}
        </div>
    )
}
