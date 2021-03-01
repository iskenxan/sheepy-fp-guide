import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import theme from "prism-react-renderer/themes/github";
import { Line, LineContent, LineNo, Pre } from "./styles";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export default function PrismCode({ code }: { code: string }) {
  return (
    <Container shadow="lg">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language="javascript"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </Container>
  );
}

const Container = styled(Box)`
  pre {
    margin: 0px !important;
  }
`;
