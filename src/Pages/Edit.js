import React from "react";
import EditSongs from "../Components/EditSongs";

export default function Edit({ song, updatedSongs }) {
  return (
    <div>
      <EditSongs songs={song} updatedSongs={updatedSongs} />
    </div>
  );
}
