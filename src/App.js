import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";
import { useState } from "react";
import Searching from "./components/Searching";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  

  return (
    <div className="App">
      {/*Body*/}
      <div>
        <h1 className="header">Jammming</h1>
      </div>
      <div>
        <Searching onSearch={handleSearch} />
      </div>

      <div className="columns">
        <div>
          <Results searchTerm={searchTerm} />
        </div>
        <div>
          <input placeholder="playlist name "></input>
        </div>
      </div>
    </div>
  );
}

export default App;
