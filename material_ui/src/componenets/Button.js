import {
  CameraFront,
  DeleteIcon,
  Fingerprint,
  PhotoCamera,
  Star,
} from "@material-ui/icons";
import { Button, Icon, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

function Button_mui() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">text</Button>
      <Button variant="contained">text</Button>
      <Button disabled>text</Button>
      <Button variant="text" href="www.google.com">
        text
      </Button>
      {/* <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button> */}
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <Icon>
        <PhotoCamera>qhcgqdcv</PhotoCamera>
      </Icon>
      <hr />
      <Button endIcon={<CameraFront />}>Delete</Button>
      <IconButton size="large">
        <CameraFront />
      </IconButton>
      <IconButton size="large">
        <CameraFront />
      </IconButton>
      <IconButton size="large">
        <Fingerprint />
      </IconButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    </div>
  );
}
export default Button_mui;
