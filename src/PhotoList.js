import React from "react";
import PhotosData from "../src/Photo_Posts/PhotosData";
import classes from "./Photo_Posts/photo.module.css";
import { Grid } from "@material-ui/core";

function PhotoList(props) {
  return (
    <Grid container className={classes.item} sx={{ flexGrow: 1 }} spacing={2}>
      {props.details.map((photo) => (
        <Grid item xs={12} sm={6} md={4}>
          <PhotosData
            albumId={photo.albumId}
            id={photo.id}
            title={photo.title}
            url={photo.url}
            thumbnailUrl={photo.thumbnailUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PhotoList;
