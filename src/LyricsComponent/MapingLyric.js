import React from "react";

export default function MapingLyric({ lyric, id }) {
  //   console.log(lyrics.lyricSpanish);
  return (
    <div className="Lyric">
      <h1>{lyric.name}</h1>
      <h1>{lyric.artist}</h1>
      <h1>{lyric.album}</h1>
      <h1>{lyric.released}</h1>
      <p>{lyric.spanish}</p>
      {/* <p>{lyric.lyricEnglish}</p> */}
    </div>
  );
}
