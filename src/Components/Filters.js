import React from "react";
import MapingSongs from "./MapingSongs";
import Table from "react-bootstrap/Table";

export default function Filters({ songs }) {
  return (
    <div className="table">
      <h3>Todas mis canciones</h3>
      <section>
        <Table bordered hover>
          <thead>
            <tr className="titulos">
              <th>Favorite</th>
              <th>Title</th>
              <th>Album</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <MapingSongs song={song} id={song.id} key={song.id} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
