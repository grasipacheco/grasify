import React from "react";
import { data } from "./db.js";
import AlbumCard from "./components/AlbumCard";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1 className="app-header">Grasify</h1>
      <ul className="app-albums">
        {data.map((info) => (
          <li key={info.id}>
            <AlbumCard
              title={info.title}
              artist={info.artist}
              albumCover={info.image.url}
              songs={info.tracks}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
