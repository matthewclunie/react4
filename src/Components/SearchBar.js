import * as React from "react";
import { useState } from "react";
import "./SearchBar.css";
import photos from "../Photo_Posts/photos.json";
import { Autocomplete } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";

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
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={photos.map((photo) => photo.title)}
        renderInput={(params) => (
          <TextField {...params} label="search the dang album" />
        )}
      />
    </div>
  );
}

export default SearchBar;
