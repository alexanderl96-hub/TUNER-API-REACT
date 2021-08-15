import React from "react";
import {Link} from "react-router-dom"
import Lyrics from "../LyricsComponent/Lyrics"

export default function Lyric({ lyric }) {
  console.log(lyric)

  return (
    <div className="container">
      <Link to={`/songs`} className="Mus-Vid">
        <button className="Mus-Vid">Musica </button>
      </Link>
      <Link to={`/videos`} className="Mus-Vid">
        <button className="Mus-Vid">Video</button>
      </Link>
      <Link to={`/lyrics`} className="Mus-Vid">
        <button className="Mus-Vid">Lyrics</button>
      </Link>
      <Lyrics lyrics={lyric}/>
    </div>
  );
}
