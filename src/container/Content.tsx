import { Badge, Box, Code, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import PrismCode from "../components/prism-code/PrismCode";
import { IFunctionDoc } from "../interfaces/FunctionDoc";
import { getAllFunctionDocs } from "../utils/function-docs";
import MarkDownDisplay from "react-markdown";

import { useMainContext } from "./MainContext";
import { colors } from "../utils/theme";

const FUNCTION_DOCS = getAllFunctionDocs();

const DocItem = ({ doc }: { doc: IFunctionDoc }) => {
  return (
    <Box d="flex" marginTop="24px" flex="1">
      <Box color={colors.fgColor} width="50%" d="flex" flexDir="column">
        <Box marginRight="auto">
          <Box alignItems="center" marginBottom="24px" d="flex">
            <Heading>{doc.doc.title}</Heading>
            <Badge marginLeft="8px" height="fit-content">
              {doc.doc.kind}
            </Badge>
          </Box>
          <Code marginBottom="12px">
            <MarkDownDisplay source={doc.doc.signature} />
          </Code>
          <MarkDownDisplay source={doc.doc.description} />
          <Box marginTop="16px">
            <Link
              fontWeight="bold"
              href={doc.doc.link}
              color={colors.linkColor}
            >{`See the docs ->`}</Link>
          </Box>
        </Box>
      </Box>
      <Box marginLeft="12px" d="flex" w="50%">
        <Box marginLeft="auto">
          <PrismCode code={doc.code} />
        </Box>
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

  return (
    <Box>
      {functionDocs.map(item => (
        <DocItem doc={item} />
      ))}
    </Box>
  );
}
