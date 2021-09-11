import React from "react";

export default function MapingLibrary({ song, id  }) {
  return (
    <div className="dentro">
      <div className="productCard">
        <h2>{song.album}</h2>
        <img
          src={song.photo} 
          alt={song.artist}
          style={{ width: "350px", height: "290px" }}
        />
        <h2>{song.artist}</h2>
      </div>
    </div>
  );
}
