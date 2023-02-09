import React from "react";
import {
  Button,
  Box,
  TextField,
  getNativeSelectUtilityClasses,
} from "@mui/material";
import Crunchyroll from "./Crunchyroll";
import { IPlatforms } from "../interfaces/interfaces";
import { PlatformUrls } from "../utils/enums";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

interface props {
  platformSelected: IPlatforms;
  commentSection: React.ReactNode;
  searchUrl: PlatformUrls;
}

const Platform = (platform: props) => {
  const { platformSelected } = platform;
  const openSearchPage = (searchQuery: string) =>
    window.open(`${PlatformUrls[platformSelected]}${searchQuery}`, "_blank");

  const [searchQuery, setSearchQuery] = React.useState<string>("");
  return (
    <Box>
      {platformSelected == "crunchyroll" ? <Crunchyroll /> : null}
      {platformSelected == "netflix" ? <Crunchyroll /> : null}
      {platformSelected == "animeflv" ? (
        <Crunchyroll />
      ) : null}
      <Box>
        <TextField
          label="tu búsqueda"
          variant="standard"
          color="warning"
          focused
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <Button
          endIcon={<ArrowForwardOutlinedIcon />}
          onClick={() => openSearchPage(searchQuery)}
          variant="outlined"
        >
          Ir al sitio s2
        </Button>
      </Box>
    </Box>
  );
};

export default Platform;
