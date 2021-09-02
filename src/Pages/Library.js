import React from "react";
import { Link } from "react-router-dom";
import MapingLibrary from "../Library Component/MapingLibrary";
import MapingAlbum from "../Library Component/MapingAlbum";
import MapingFavorite from '../Library Component/MapingFavorite';
import MapingArtist from "../Library Component/MapingArtist";
import MapingGenre from "../Library Component/MapingGenre"

export default function Library({ albums, song , artist, genre}) {
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
      <div className="MinMax3">
        <h1>Albums</h1>
        <section className="MinMax">
          <article>
            {albums.map((album) => {
              return (
                <MapingAlbum
                  album={album}
                  id={album.id}
                  key={album.id}
                  covers={album.covers}
                />
              );
            })}
          </article>
        </section>
      </div>

      <div className="MinMax3">
        <h1>Recent Songs</h1>
        <section className="MinMax">
          <article>
            {song.map((songs) => {
              return (
                <MapingLibrary song={songs} id={songs.id} key={songs.id} />
              );
            })}
          </article>
        </section>
      </div>

      <div className="MinMax3">
        <h1>Favorite</h1>
        <section className="MinMax">
          <article>
            {song.map((songs) => {
              return (
                <MapingFavorite song={songs} id={songs.id} key={songs.id} />
              );
            })}
          </article>
        </section>
      </div>

      <div className="MinMax3">
        <h1>Artist</h1>
        <section className="MinMax">
          <article>
            {artist.map((art) => {
              return (
                <MapingArtist artis={art} id={art.id} key={art.id} />
              );
            })}
          </article>
        </section>
      </div>

      <div className="MinMax3">
        <h1>Trending now</h1>
        <section className="MinMax">
          <article>
            {song.map((songs) => {
              return (
                <MapingLibrary song={songs} id={songs.id} key={songs.id} />
              );
            })}
          </article>
        </section>
      </div>

      <div className="MinMax3">
        <h1>Musical Genre</h1>
        <section className="MinMax2">
          <article>
            {genre.map((gen) => {
              return (
                <MapingGenre genr={gen} id={gen.id} key={gen.id} />
              );
            })}
          </article>
        </section>
      </div>
    </div>
  );
}
