import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/system";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const StyledType = styled("div")({
  textAlign: "center",
});

const StyledCard = styled("div")({
  height: "230px",
  backgroundColor: "#92cbd1",
});

function PhotosData(props) {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂");
    setCount(count + 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ChillestFunctionBody = () => {
    if (count % 2 === 0) {
      return "Bruhh 😂😂😂😂";
    } else return "YOO CHILL lmao 🤣🤣🤣🤣";
  };

  const ChillestFunctionTitle = () => {
    if (count % 2 === 0) {
      return "Lmao I'm dead 💀💀";
    } else return "Rofl 🙏💰💯";
  };

  return (
    <Card>
      <CardActionArea onClick={handleClickOpen} type="submit">
        <CardMedia component="img" height="140" image={props.url} />
        <StyledCard>
          <CardContent>
            <StyledType>
              <Typography variant="h5">{props.albumId}</Typography>
              <Typography variant="h5">{props.id}</Typography>
              <Typography>{props.title}</Typography>
            </StyledType>
          </CardContent>
        </StyledCard>
      </CardActionArea>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {ChillestFunctionTitle()}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          {ChillestFunctionBody()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Disagree some more
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PhotosData;
