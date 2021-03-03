import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MenuSelector from "../components/MenuSelector";
import {
  functionOptions,
  listOptions,
  logicOptions,
  mathsOptions,
  objectOptions,
  relationOptions
} from "../utils/options";
import { colors } from "../utils/theme";
import { useMainContext } from "./MainContext";
import { getState, setState } from "../utils/vsState";
import {
  ACTION_SELECTION_STATE,
  OBJECT_SELECTION_STATE
} from "../utils/consts";

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
  const { setAction } = useMainContext();
  const savedObjectSelection = getState(OBJECT_SELECTION_STATE);
  const savedActionSelection = getState(ACTION_SELECTION_STATE);

  const defaultObjectSelection = savedObjectSelection || null;
  const defaultActionSelection =
    savedActionSelection || defaultValueMap[objectSelection];

  const restoreSelections = () => {
    if (savedActionSelection) {
      setActionSelection(savedActionSelection);
      setAction(savedActionSelection);
    }
    if (savedObjectSelection) {
      setObjectSelection(savedObjectSelection);
    }
  };

  useEffect(() => {
    restoreSelections();
  }, [savedObjectSelection, savedActionSelection]);

  const handleObjectSelection = (value: string) => {
    setObjectSelection(value);
    setState({ key: OBJECT_SELECTION_STATE, value });
  };

  const handleActionSelection = (value: string) => {
    setActionSelection(value);
    setAction(value);
    setState({ key: ACTION_SELECTION_STATE, value });
  };

  return (
    <Box d="flex" flexDir="column">
      <Box display="flex">
        <Text
          minW="80px"
          color={colors.fgColor}
          alignSelf="center"
          marginRight="12px"
          fontSize="18px"
        >
          I have
        </Text>
        <MenuSelector
          placeholder="Select an option"
          options={subjectOptions}
          defaultValue={defaultObjectSelection}
          onSelect={handleObjectSelection}
        />
      </Box>
      <Box d="flex" mt="18px">
        <Text
          minW="100px"
          color={colors.fgColor}
          marginRight="12px"
          alignSelf="center"
          fontSize="18px"
        >
          I need to
        </Text>
        <MenuSelector
          placeholder="Select an option"
          defaultValue={defaultActionSelection}
          options={actionOptionsMap[objectSelection] || []}
          onSelect={handleActionSelection}
        />
      </Box>
    </Box>
  );
}
