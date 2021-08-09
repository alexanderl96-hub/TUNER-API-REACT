import React from "react";
import EditSongs from "../Components/EditSongs";

export default function Edit({ song, updatedSongs }) {
  return (
    <div>
      <h1>Edit</h1>
      <EditSongs songs={song} updateSongs={updatedSongs} />
    </div>
  );
}
