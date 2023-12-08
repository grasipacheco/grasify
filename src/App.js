import React, { useEffect, useState } from "react";
import "./App.css";
import AlbumList from "./components/AlbumList.js";
import SearchBar from "./components/SearchBar.js";

export default function App() {
  // add the fetched data to the app function
  const [albums, setAlbums] = useState([]);
  const [resultsFilter, setResultsFilter] = useState("");
  const [mainState, setMainState] = useState("featured");

  useEffect(() => {
    async function fetchData() {
      const url =
        mainState === "featured"
          ? "https://neuefische-spotify-proxy.vercel.app/api/featured"
          : `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${resultsFilter}`;

      try {
        const response = await fetch(url);
        const albums = await response.json();
        setAlbums(albums);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [mainState, resultsFilter]);

  function handleSearch(resultsFilter) {
    setResultsFilter(resultsFilter);
    setMainState("search");
  }
  return (
    <>
      <h1 className="app-header">Grasify</h1>
      <SearchBar filterText={resultsFilter} onSubmit={handleSearch} />
      <AlbumList
        albums={albums}
        title={
          mainState === "featured"
            ? "Featured 👾"
            : `Results for: ${resultsFilter}`
        }
      />
    </>
  );
}
