import { Box } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/sheepy.png";

export default function Topbar() {
  return (
    <Box w="100%" height="60px" d="flex">
      <Box height="40px" marginRight="auto">
        <img src={logo} />
      </Box>
    </Box>
  );
}
