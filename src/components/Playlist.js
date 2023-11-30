import React from "react";

const Playlist = ({tracks, deleteTrack }) => {
  
  
  return (
 <>
  <div>
      {tracks && tracks.map(track => (
          <div key={track.id}>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <h1 onClick={e=> {deleteTrack(track.id)}}>-</h1>
           </div> ))}
    </div></>
  );

};

export default Playlist;
