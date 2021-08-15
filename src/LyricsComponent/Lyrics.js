import React from "react";
import MapingLyric from "./MapingLyric";

export default function Lyrics({ lyrics }) {



  return (
    <div >
      <tbody>
        {lyrics.map((lert) => {
          return <MapingLyric lyric={lert} id={lert.id} key={lert.id} />;
        })}
      </tbody>
    </div>
  );
}
