import logo from "./logo.svg";
import "./App.css";

const searchSong = async () => {
  const searchTerm = "eminem";
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchTerm;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5a03594c9mshb2b4b18058c0a81p1bbb3ejsn4f6cb597418e",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data[0]);
  } catch (error) {
    console.error(error);
  }
};

function App() {
  //searchSong();
  return (
    <div className="App">
      {/*Body*/}
      <div>
        <h1>Jammming</h1>
      </div>
      <div>
        <input placeholder="text here" />
        <button>Search </button>
      </div>
      <div className="columns">
        <div>
          <p>a</p>
        </div>
        <div>
          <input placeholder="playlist name "></input>
        </div>
      </div>
    </div>
  );
}

export default App;
