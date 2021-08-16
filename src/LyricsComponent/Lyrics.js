import React from "react";
import MapingLyric from "./MapingLyric";

export default function Lyrics({ lyrics }) {



  return (
    <div >
      <tbody className="tbodyLyric">
        {lyrics.map((alert) => {
          return <MapingLyric lyric={alert} id={alert.id} key={alert.id} />;
        })}
      </tbody>
    </div>
  );
}
