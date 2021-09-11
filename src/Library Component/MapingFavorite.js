import React from "react";

export default function MapingFavorite({ song }) {
  return (
    <div className="dentro">
      {song.is_favorite ? (
        <div className="productCard">
          <img
            src={song.photo}
            alt={song.artist}
            style={{ width: "350px", height: "350px" }}
            className="image"
          />
          <h2>{song.name}</h2>
        </div>
      ) : null}
    </div>
  );
}
