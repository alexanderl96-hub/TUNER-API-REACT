import React from "react";
import EditSongs from "../Components/EditSongs";

export default function Edit({ song, updatedSong }) {
  return (
    <div>
      <EditSongs songs={song} updatedSong={updatedSong} />
    </div>
  );
}
