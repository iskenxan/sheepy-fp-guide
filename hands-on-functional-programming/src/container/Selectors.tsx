import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import MenuSelector from "../components/MenuSelector";
import {
  functionOptions,
  listOptions,
  logicOptions,
  mathsOptions,
  objectOptions,
  relationOptions
} from "../utils/options";

const subjectOptions = [
  { value: "list", label: "List []" },
  { value: "object", label: "Object {}" },
  { value: "function", label: "Function fn" },
  { value: "logic", label: "Logic if" },
  { value: "relation", label: "Relation >=" },
  { value: "math", label: "Math" }
];

const actionOptionsMap: any = {
  list: listOptions,
  object: objectOptions,
  function: functionOptions,
  logic: logicOptions,
  relation: relationOptions,
  math: mathsOptions
};

const defaultValueMap: any = {
  list: "map",
  object: "map / mapObjIndexed",
  function: "compose / pipe",
  logic: "ifElse / cond / unless / when",
  relation: "equals",
  math: "inc"
};

export default function Selectors() {
  const [objectSelection, setObjectSelection] = useState("");
  const [actionSelection, setActionSelection] = useState("");

  const handleObjectSelection = (value: string) => {
    setObjectSelection(value);
  };

  const handleActionSelection = (value: string) => {
    setActionSelection(value);
  };

  return (
    <Box d="flex" flexDir="column">
      <Box display="flex">
        <Text
          minW="80px"
          color="white"
          alignSelf="center"
          marginRight="12px"
          fontSize="18px"
        >
          I have
        </Text>
        <MenuSelector
          placeholder="Select an option"
          options={subjectOptions}
          onSelect={handleObjectSelection}
        />
      </Box>
      <Box d="flex" mt="18px">
        <Text
          minW="100px"
          color="white"
          marginRight="12px"
          alignSelf="center"
          fontSize="18px"
        >
          I need to
        </Text>
        <MenuSelector
          placeholder="Select an option"
          defaultValue={defaultValueMap[objectSelection]}
          options={actionOptionsMap[objectSelection] || []}
          onSelect={handleActionSelection}
        />
      </Box>
    </Box>
  );
}
