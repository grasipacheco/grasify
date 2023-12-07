import React, { useEffect, useState } from "react";
import "./App.css";
import AlbumList from "./components/AlbumList.js";

export default function App() {
  // add the fetched data to the app function
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://neuefische-spotify-proxy.vercel.app/api/featured"
        );
        const albums = await response.json();
        setAlbums(albums);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    console.log(fetchData);
  }, []);
  return (
    <>
      <h1 className="app-header">Grasify</h1>
      <AlbumList albums={albums} title={"Featured 👾"} />;
    </>
  );
}
