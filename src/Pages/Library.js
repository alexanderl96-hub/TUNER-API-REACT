import React from "react";
import { Link } from "react-router-dom";
import MapingLibrary from "../Library Component/MapingLibrary";

export default function Library({ song }) {
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
      <section className="MinMax">
        <h1>Albums</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>

      <section className="MinMax">
        <h1>Recent Songs</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>
      <section className="MinMax">
        <h1>Favorite</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>

      <section className="MinMax">
        <h1>Songs</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>
      <section className="MinMax">
        <h1>More Popular</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>

      <section className="MinMax2">
        <h1>Musical Genre</h1>
        <article>
          {song.map((songs) => {
            return <MapingLibrary song={songs} id={songs.id} key={songs.id} />;
          })}
        </article>
      </section>

    </div>
  );
}
