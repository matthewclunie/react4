import * as React from "react";
import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
// import PhotosData from "../src/Photo_Posts/PhotosData";
// import PhotoList from "../PhotoList";
import photos from "../Photo_Posts/photos.json";

function SearchBar({ placeholder /*photo*/ }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([""]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = photos.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CancelIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((photo /*key*/) => {
            return (
              <a className="dataItem" href={photo.url}>
                <p>{photo.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
