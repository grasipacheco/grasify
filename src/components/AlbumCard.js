import "./AlbumCard.css";
import SongList from "./SongList";
import { useState } from "react";

// function has to create cards with the props: title, author and album cover
export default function AlbumCard({ title, artist, albumCover, songs }) {
  const [displaySongs, setDisplaySongs] = useState(false);
  return (
    <article className="album-card">
      <button
        className="album-card-tracks"
        onClick={() => setDisplaySongs(!displaySongs)}
        aria-label="Click here to toggle the tracks list"
      >
        <img className="album-card-img" src={albumCover} alt={title} />
      </button>
      <div className="album-card-content">
        <p className="album-card-title">Title: {title}</p>
        <p className="album-card-artist">Artist: {artist}</p>
      </div>
      {displaySongs === true && <SongList songs={songs} />}
    </article>
  );
}
