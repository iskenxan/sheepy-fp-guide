import { Box, color, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/sheepy.png";
import ramda_logo from "../assets/ramda.png";
import { colors } from "../utils/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Topbar() {
  return (
    <Box
      w="100%"
      marginBottom="32px"
      alignItems="center"
      height="60px"
      d="flex"
    >
      <Box height="40px">
        <Image src={logo} />
      </Box>
      <Box ml="12px" d="flex" marginRight="auto">
        <Text color={colors.fgColor} fontSize="12px">
          Interactive FP guide for Ramda.js
        </Text>
        <Image marginLeft="8px" h="12px" src={ramda_logo} />
      </Box>
      <Link href="https://github.com/iskenxan/sheepy-fp-guide">
        <FontAwesomeIcon size="lg" color={colors.fgColor} icon={faGithub} />
      </Link>
    </Box>
  );
}
