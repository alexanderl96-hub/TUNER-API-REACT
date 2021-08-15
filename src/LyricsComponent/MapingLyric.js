import React from "react";

export default function MapingLyric({ lyric, id }) {
  //   console.log(lyrics.lyricSpanish);
  return (
    <div className="Lyric">
        
        <h2>{lyric.name}</h2>
        <h2>{lyric.artist}</h2>
        <h2>{lyric.album}</h2>
        <h2>{lyric.released}</h2>
        <p>{lyric.lyricSpanish}</p>
        <p>{lyric.lyricEnglish}</p>

    </div>
  );
}
