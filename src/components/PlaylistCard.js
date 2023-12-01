import React from 'react'

const PlaylistCard = ({tracks, deleteTrack}) => {
  return (
    <>
      {tracks && tracks.map(track => (
          <div key={track.id}>
            <h4>{track.title}</h4>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <h1 onClick={e=> {deleteTrack(track.id)}}>-</h1>
            
           </div> ))}
    </>
  )
}

export default PlaylistCard;
