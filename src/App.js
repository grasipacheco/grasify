import React from "react";
import { data } from "./db.js";
import AlbumCard from "./components/AlbumCard";
import "";

export default function App() {
  return (
    <>
      <div className="app">
        <h1 className="app-header">Grasify</h1>
        <ul className="app-albums">
          console.log(data)
          {data.map((info) => (
            <li key={info.id}>
              <AlbumCard
                title={info.title}
                author={info.author}
                albumCover={info.image.url}
              ></AlbumCard>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
