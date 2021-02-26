import { Box } from "@chakra-ui/react";
import React from "react";
import Selectors from "./Selectors";

export default function Main() {
  return (
    <Box d="flex" flexDirection="column">
      <Selectors />
    </Box>
  );
}
