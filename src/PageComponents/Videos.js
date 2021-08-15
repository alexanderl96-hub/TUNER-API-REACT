import React from "react";
import { Link } from "react-router-dom";
import Video from "../ComponentesVideo/Video";

export default function Videos({ video }) {
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
      <h1>Video</h1>
      <Video video={video} />
    </div>
  );
}
