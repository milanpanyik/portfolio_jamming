import React, { useState, useEffect } from "react";
import Searching from "./components/Searching";
import Results from "./components/Results";
import "./App.css";
import Playlist from "./components/Playlist";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);

    


  const handleSave = (playlistName) => {
    alert(`${playlistName} saved, thank you, good day!`);
    setSelectedTracks([]);

  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTrackSelection = (track) => {
    if(!selectedTracks.includes(track)){
      const newSelectedTracks = [...selectedTracks, track];
       setSelectedTracks(newSelectedTracks);
    }
      
   
  };

  const handleTrackDeletion = (trackId) => {
    const newSelectedTracks = selectedTracks.filter(track => track.id !== trackId) 
    setSelectedTracks(newSelectedTracks);
  };


  return (
    <div className="App">
      {/* Body */}
      <div>
        <h1 className="header">Jam<span>mmmmmmmmmmmmmmmmmmmmmmmm</span>ing</h1>

        <Searching className="Searching" onSearch={handleSearch} />
      </div>

      <div className="columns">
        <div>
        <Results   searchTerm={searchTerm}  selectTrack={handleTrackSelection} />
        </div>
        <div>
        <Playlist onSave={handleSave} tracks={selectedTracks}  deleteTrack={handleTrackDeletion} />
        </div>
      </div>
    </div>
  );
}

export default App;
