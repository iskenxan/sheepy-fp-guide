import { Box } from "@chakra-ui/react";
import React from "react";
import MenuSelector from "../components/MenuSelector";

export default function Selectors() {
  return (
    <Box d="flex" flexDir="column">
      <MenuSelector />
    </Box>
  );
}
