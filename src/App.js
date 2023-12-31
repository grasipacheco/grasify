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
        console.error("Failed to fetch data", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>Grasify</h1>
      <AlbumList albums={albums} title={"Featured"} />;
    </>
  );
}
