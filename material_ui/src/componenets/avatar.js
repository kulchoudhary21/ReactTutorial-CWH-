import { deepOrange } from "@material-ui/core/colors";
import { Mail } from "@material-ui/icons";
import { Avatar, AvatarGroup, Badge } from "@mui/material";
import React from "react";
import image from "./images/1.jpg";
const AvatarImages = () => {
  return (
    <div>
      <Avatar
        alt="Travis Howard"
        sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}
      >
        AK
      </Avatar>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={image} />
        <Avatar alt="Travis Howard" src={image} />
        <Avatar alt="Cindy Baker" src={image} />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Badge badgeContent={5} color="primary">
        <Mail color="action" />
      </Badge>
    </div>
  );
};
export default AvatarImages;
