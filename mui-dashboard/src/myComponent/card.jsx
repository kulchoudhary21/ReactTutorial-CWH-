import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
function Card({ data }) {
  return (
    <div>
      <CardMedia>
        <CardContent>
        
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.res.username}
        </Typography>
        </CardContent>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {(data.res.name)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.res.email}
        </Typography>
        <Typography variant="body2">
          {data.res.phone}
          <br />
          {data.res.address.city}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={data.res.website}>Website</Button>
        </CardActions>
      </CardMedia>
    </div>
  );
}
export default Card;
