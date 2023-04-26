import React, { useState } from "react";
import { useEffect } from "react";
import CardDiv from "../components/cardDiv";
import "./styles.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function App() {
  const [search, setSearch] = useState();
  const [videoData, setvideoData] = useState([]);

  const baseURL = search
    ? `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${search}`
    : "https://content-xflix-backend.azurewebsites.net/v1/videos";

  const fetchVideoData = () => {
    axios.get(baseURL).then((res) => {
      setvideoData(res.data.videos);
      //console.log(res.data.videos);
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchVideoData();
  }, [search]);
  return (
    <div className="App">
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Search Video"
        variant="outlined"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <Grid container spacing={2}>
        {videoData.map((item) => {
          return (
            <Grid item>
              <CardDiv
                key={item.id}
                imgLink={item.previewImage}
                title={item.title}
                date={item.releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
