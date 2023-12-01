import React from "react";

const ResultCard = ({ songs, selectTrack }) => {
  return (
    <div >
      {songs.map((song, index) => (
        <div key={index} className="TrackCard">
          <h4>{song.title}</h4> 
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <h1
            style={{cursor: 'pointer'}}
            onClick={(e) => {
              selectTrack(song);
            }}
          >
            +
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ResultCard;
