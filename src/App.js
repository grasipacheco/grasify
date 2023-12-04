import React from "react";
import { data } from "./db";
import AlbumCard from "./components/AlbumCard";

export default function App() {
  console.log("its not working");
  return (
    <div className="app">
      <h1 className="app-header">Grasify</h1>
      <ul>
        {data.map((info) => (
          <li key={info.id}>
            <AlbumCard
              title={info.title}
              artist={info.artist}
              albumCover={info.image.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
