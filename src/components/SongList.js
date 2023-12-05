import "./SongList.css";

export default function SongList({ songs }) {
  return (
    <ul className="songs-list">
      {songs.map((song) => (
        <li key={songs.id}>
          <span className="songs-number">{song.track_number}</span>
          <span className="songs-name">{song.name}</span>
          <span className="songs-duration">{song.duration}</span>
        </li>
      ))}
    </ul>
  );
}
