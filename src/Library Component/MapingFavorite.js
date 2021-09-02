import React from "react";

export default function MapingFavorite({ song }) {
  return (
    <div className="dentro">
      {song.is_favorite ? (
        <div className="productCard">
          <img
            src={song.photo}
            alt={song.artist}
            style={{ width: "350px", height: "320px" }}
            className= "image"
          />
          <h4>{song.artist}</h4>
        </div>
      ) : null}
    </div>
  );
}
