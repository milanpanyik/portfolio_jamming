import React, { useState } from "react";
import Searching from "./components/Searching";
import Results from "./components/Results";
import "./App.css";
import Playlist from "./components/Playlist";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTrackSelection = (track) => {
    console.log(selectedTracks);
    const newSelectedTracks = [...selectedTracks, track];
    setSelectedTracks(newSelectedTracks);
  };

  const handleTrackDeletion = (trackId) => {
    const newSelectedTracks = selectedTracks.filter(track => track.id !== trackId) 
    setSelectedTracks(newSelectedTracks);
  };


  return (
    <div className="App">
      {/* Body */}

      <h1 className="header">Jammming</h1>

      <Searching onSearch={handleSearch} />
      <div>
      <Results searchTerm={searchTerm} selectTrack={handleTrackSelection} />

      <Playlist  tracks={selectedTracks}  deleteTrack={handleTrackDeletion} />
      </div>
    </div>
  );
}

export default App;
