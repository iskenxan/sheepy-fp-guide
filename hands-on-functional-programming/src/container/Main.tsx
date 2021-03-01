import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import Topbar from "../components/Topbar";
import Content from "./Content";
import MainContextWrapper from "./MainContext";
import Selectors from "./Selectors";

export default function Main() {
  return (
    <Box padding="24px" d="flex" flexDirection="column">
      <MainContextWrapper>
        <Topbar />
        <Selectors />
        <Divider mt="12px" mb="12px" />
        <Content />
      </MainContextWrapper>
    </Box>
  );
}
