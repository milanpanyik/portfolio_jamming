import { useEffect, useState } from "react";

const Results = ({ searchTerm, selectTrack }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const searchSong = async () => {
      const url =
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchTerm;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c5a03594c9mshb2b4b18058c0a81p1bbb3ejsn4f6cb597418e",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const songsData = result.data.map((obj) => ({
          title: obj.title,
          artist: obj.artist.name,
          album: obj.album.title,
          id: obj.id,
        }));
        setSongs(songsData);
      } catch (error) {
        console.log(error);
      }
    };
    searchSong();
  }, [searchTerm]);

  return (
    <div>
      <h3>Results</h3>
      {songs.map((song, index) => (
        <div key={index}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <p>{song.album}</p> 
          <h1 onClick={e=>{selectTrack(song)}}>+</h1>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Results;
