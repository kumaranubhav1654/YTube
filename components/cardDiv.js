import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 250, maxHeight: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imgLink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
