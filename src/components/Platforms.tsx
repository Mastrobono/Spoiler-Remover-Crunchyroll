import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Platforms } from "../utils/enums";
import {IPlatforms} from "../interfaces/interfaces"
import Platform from "./Platform";

interface TabPanelProps {
  children?: React.ReactNode;
  index: IPlatforms;
  platformSelected: IPlatforms;
}

const { crunchyroll, netflix, animeflv } = Platforms;

const PlatformTabs = () => {
  const [platformSelected, setPlatformSelected] =
    React.useState<IPlatforms>("crunchyroll");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: IPlatforms
  ) => {
    setPlatformSelected(newValue);
  };

  const TabNav = () => {
    return (
      <Tabs
        value={platformSelected}
        onChange={handleChange}
        className="bg-stone-200/[0.6]"
        centered
      >
        <Tab icon={<PhoneIcon />} value={crunchyroll} label={crunchyroll} />
        <Tab icon={<FavoriteIcon />} value={netflix} label={netflix} />
        <Tab icon={<PersonPinIcon />} value={animeflv} label={animeflv} />
      </Tabs>
    );
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children, platformSelected, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={platformSelected !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {platformSelected === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const TabPanels = () => {
    return (
      <Box className="bg-stone-200/[0.6] my-2">
        <TabPanel platformSelected={platformSelected} index={crunchyroll}>
          <Platform platformSelected={crunchyroll}/>
        </TabPanel>
        <TabPanel platformSelected={platformSelected} index={netflix}>
          <Platform platformSelected={netflix}/>
        </TabPanel>
        <TabPanel platformSelected={platformSelected} index={animeflv}>
          <Platform platformSelected={animeflv}/>
        </TabPanel>
      </Box>
    );
  };

  return (
    <Box className="relative z-30">
      <TabNav />
      <TabPanels />
    </Box>
  );
};

export default PlatformTabs;
