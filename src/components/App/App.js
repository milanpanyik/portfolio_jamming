import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

const App = () => {

    return (
        <div>
            <h1>Jammming</h1>
            <div>
                <SearchBar />
                <div /*result and playlist */>
                    <SearchResults />   
                    <Playlist />
                                     
                </div>
            </div>

        </div>
    );
};

export default App;
