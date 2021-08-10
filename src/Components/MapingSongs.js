import React from "react";
import { Link } from "react-router-dom";

export default function MapingSongs({ song, id }) {
  return (
    <section className="color">
      <table>
        <tr>
          <td className="box">
            <Link to={`/songs/${id}`} className="maping">
              <p className="income">
                {song.is_favorite ? (
                  <span role="img">⭐️</span>
                ) : (
                  <span role="img">&nbsp; &nbsp; &nbsp;</span>
                )}
              </p>
            </Link>
          </td>
          <td className="box">
            <Link to={`/songs/${id}`} className="maping">
              <p>{song.name ? song.name : null}</p>
            </Link>
          </td>
          <td className="box">
            <Link to={`/songs/${id}`} className="maping">
              {song.album}
            </Link>
          </td>
          <td className="box">
            <Link to={`/songs/${id}`} className="maping">
              <p>
                <strong> {song.artist}</strong>
              </p>
            </Link>
          </td>
        </tr>
      </table>
    </section>
  );
}
