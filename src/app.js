import * as React from "react";
import PhotoList from "./PhotoList";
import photos from "./Photo_Posts/photos.json";
import classes from "./Photo_Posts/photo.module.css";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import SearchBar from "./Components/SearchBar";

const StyledPaper = styled(Paper)`
  color: #92cbd1;
  background-color: #1f1f1f;
  padding: 10px;
  text-align: center;
`;

function App() {
  return (
    <StyledPaper className={classes.item}>
      <h1>Photo Albums JSON Project</h1>
      <SearchBar placeholder="Search the dang album" data={photos} />
      <PhotoList details={photos} />
    </StyledPaper>
  );
}

export default App;
