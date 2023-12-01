import React, {useState} from "react";
import PlaylistCard from "./PlaylistCard";
const Playlist = ({tracks, deleteTrack, onSave }) => {
  const [playlistName, setPlaylistName] = useState('')


  const handlePlaylistName = (event) => {
      setPlaylistName(event.target.value);
  };
  
  const handlePlaylistSave = () => {
    onSave(playlistName);
    setPlaylistName("");
  };

  return (
 <>
  <div className="PlaylistContainer"> 
      <input type="text" value={playlistName} onChange={handlePlaylistName} className="PlaylistInput input::placeholder" placeholder="Enter Playlist Name Here"  />
        <PlaylistCard tracks={tracks} deleteTrack={deleteTrack}/>
        <button onClick={handlePlaylistSave} className="searchButton">Save Playlist</button>
    </div></>
  );

};

export default Playlist;
