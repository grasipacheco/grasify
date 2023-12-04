import "./AlbumCard.css";

// function has to create cards with the props: title, author and album cover
export default function AlbumCard({ title, artist, albumCover }) {
  return (
    <>
      <article>
        <img className="album-card-img" src="{albumCover}" alt="{title}" />
        <div className="album-card-content">
          <span>{title}</span>
          <p> {artist}</p>
        </div>
      </article>
    </>
  );
}
