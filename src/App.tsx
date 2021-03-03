import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import Main from "./container/Main";

class App extends React.Component {
  public render() {
    return (
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    );
  }
}

export default App;
