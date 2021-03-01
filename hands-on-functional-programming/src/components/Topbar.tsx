import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/Logo";

export default function Topbar() {
  return (
    <Box w="100%" height="60px" d="flex">
      <Box marginRight="auto">
        <Logo height={32} />
      </Box>
    </Box>
  );
}
