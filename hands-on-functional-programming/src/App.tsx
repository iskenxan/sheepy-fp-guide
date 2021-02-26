import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";

class App extends React.Component {
  public render() {
    return (
      <ChakraProvider theme={theme}>
        <Box background="var(--vscode-textCodeBlock-background)">
          <p>Hello world!</p>
        </Box>
      </ChakraProvider>
    );
  }
}

export default App;
