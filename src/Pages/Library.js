import React from "react";
import { Link } from "react-router-dom";
import MapingLibrary from "../Library Component/MapingLibrary";

export default function Library({ song }) {
  return (
    <div>
      <Link to={`/songs`} className="Mus-Vid">
        <button className="Mus-Vid">Musica </button>
      </Link>
      <Link to={`/videos`} className="Mus-Vid">
        <button className="Mus-Vid">Video</button>
      </Link>
      <Link to={`/lyrics`} className="Mus-Vid">
        <button className="Mus-Vid">Lyrics</button>
      </Link>
      <h2>Library</h2>
      <section>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>
    </div>
  );
}
