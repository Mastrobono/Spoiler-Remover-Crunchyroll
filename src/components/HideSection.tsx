import React from "react";
import { PlatformUrls } from "../utils/enums";
import { Switch, Box, Typography, Button, TextField } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

interface props {
  title: string;
  state: boolean;
  setState: Function;
}

const HideSection = ({title, state, setState}: props) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Switch
        checked={state}
        onChange={() => {
          setState(!state);
        }}
        color="warning"
      />
    </Box>
  );
};

export default HideSection;
