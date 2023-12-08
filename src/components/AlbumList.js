import AlbumCard from "./AlbumCard";
import "./AlbumList.css";

export default function AlbumList({ title, albums }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className="app-albums">
        {albums.map((album) => (
          <li key={album.id}>
            <AlbumCard
              title={album.title}
              artist={album.artist}
              albumCover={album.image.url}
              songs={album.tracks}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
