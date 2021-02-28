import { Box } from "@chakra-ui/react";
import React from "react";
import Content from "./Content";
import MainContextWrapper from "./MainContext";
import Selectors from "./Selectors";

export default function Main() {
  return (
    <Box padding="24px" d="flex" flexDirection="column">
      <MainContextWrapper>
        <Selectors />
        <Content />
      </MainContextWrapper>
    </Box>
  );
}
