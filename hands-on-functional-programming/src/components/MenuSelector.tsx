import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MenuSelector() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FontAwesomeIcon icon={faArrowDown} />}
      >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
