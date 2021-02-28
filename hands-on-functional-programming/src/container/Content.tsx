import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import PrismCode from "../components/prism-code/PrismCode";
import { IFunctionDoc } from "../interfaces/FunctionDoc";
import { getAllFunctionDocs } from "../utils/function-docs";

import { useMainContext } from "./MainContext";

const FUNCTION_DOCS = getAllFunctionDocs();

const DocItem = ({ doc }: { doc: IFunctionDoc }) => {
  return (
    <Box d="flex">
      <Box d="flex" flexDir="column">
        <Heading>{doc.doc.title}</Heading>
        <Text>{doc.doc.description}</Text>
        <Link>{doc.doc.link}</Link>
      </Box>
      <Box>
        <PrismCode code={doc.code} />
      </Box>
    </Box>
  );
};

const getFunctionDocs = (action: string) => {
  let functionNames = [action];
  if (action.indexOf(" / ") !== -1) {
    functionNames = action.split(" / ");
  }
  return FUNCTION_DOCS.filter(
    item => functionNames.indexOf(item.doc.title) !== -1
  );
};

export default function Content() {
  const { action } = useMainContext();
  const functionDocs = getFunctionDocs(action);

  console.log({ functionDocs });

  return (
    <Box>
      {functionDocs.map(item => (
        <DocItem doc={item} />
      ))}
    </Box>
  );
}
