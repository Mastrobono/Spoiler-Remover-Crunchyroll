import React from "react";
import { PlatformUrls } from "../utils/enums";
import { Box, TextField, Button } from "@mui/material";
import HideSection from "./HideSection";

interface props {
  commentSection: React.ReactNode;
  searchUrl: PlatformUrls;
  currentEpisodeTitle: React.ReactNode;
  nextPrevEpisodeTitle: React.ReactNode;
}

const Crunchyroll = (props: props) => {
  const [hideCommentSection, setHideCommentSection] =
    React.useState<boolean>(true);
  const [hideCurrentEpisodeTitle, setHideCurrentEpisodeTitle] =
    React.useState<boolean>(true);
  const [hideNextPrevEpisdeTitle, setHideNextPrevEpisodeTitle] =
    React.useState<boolean>(true);

  return (
    <Box>
      <HideSection
        title={"Hide"}
        state={hideCommentSection}
        setState={setHideCommentSection}
      />
      <HideSection
        title={"Hide current episode title"}
        state={hideCurrentEpisodeTitle}
        setState={setHideCurrentEpisodeTitle}
      />
      <HideSection
        title={"HIde next prev episode title"}
        state={hideNextPrevEpisdeTitle}
        setState={setHideNextPrevEpisodeTitle}
      />
    </Box>
  );
};

export default Crunchyroll;
