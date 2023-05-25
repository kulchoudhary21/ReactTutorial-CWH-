import styled from "styled-components";
import * as React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import Card from "./card";
import { useEffect } from "react";
function BodyContent() {
  const [data, setData] = React.useState("");
  const Item = styled.div`
  textAlign: "center", 
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  margin: 0 1em;
  padding: 1em 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <Typography variant="h3" align="center">
          User Data
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} marginTop="50px">
        <Grid container spacing={2}>
          {data?.data?.map((res) => (
            <Grid item xs={3}>
              <Item>
                <Card sx={{ maxWidth: 345 }} data={{res}}></Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
export default BodyContent;
