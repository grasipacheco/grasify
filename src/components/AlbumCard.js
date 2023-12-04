import "./AlbumCard.css";

// function has to create cards with the props: title, author and album cover
export default function AlbumCard({ title, artist, albumCover }) {
  return (
    <article className="album-card">
      <img className="album-card-img" src={albumCover} alt={title} />
      <div className="album-card-content">
        <p className="album-card-title">{title}</p>
        <p className="album-card-artist">{artist}</p>
      </div>
    </article>
  );
}
