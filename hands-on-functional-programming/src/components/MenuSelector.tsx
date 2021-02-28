import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { IMenuOptions } from "../interfaces/MenuOptionts";

const findLabel = ({
  options,
  value
}: {
  options: IMenuOptions[];
  value: string;
}) => {
  const item = options.find(item => item.value === value);

  return item ? item.label : null;
};

export default function MenuSelector({
  onSelect,
  options,
  placeholder,
  defaultValue
}: {
  onSelect: (value: string) => void;
  options: IMenuOptions[];
  placeholder: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const handOnSelect = (value: string) => {
    return () => {
      setValue(value);
      onSelect(value);
    };
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        color="primary.600"
        overflow="hidden"
        display="flex"
        justifyContent="start"
        rightIcon={<FontAwesomeIcon icon={faArrowDown} />}
      >
        {value ? findLabel({ options, value }) : placeholder}
      </MenuButton>
      <MenuList maxH="600px" overflow="auto" color="primary.600">
        {options.map(item => (
          <MenuItem onClick={handOnSelect(item.value)}>{item.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
