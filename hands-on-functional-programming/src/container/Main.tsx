import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Content from "./Content";
import MainContextWrapper from "./MainContext";
import Selectors from "./Selectors";

export default function Main() {
  return (
    <MainContextWrapper>
      <Box h="100vh" padding="24px" d="flex" flexDirection="column">
        <Topbar />
        <Selectors />
        <Divider mt="12px" mb="12px" />
        <Content />
        <Footer />
      </Box>
    </MainContextWrapper>
  );
}
