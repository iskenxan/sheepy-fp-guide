import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
export const colors = {
  bgColor: "var(--vscode-textCodeBlock-background)",
  fgColor: "var(--vscode-foreground)",
  fontSize: "var(--vscode-editor-font-size)"
};

export const theme = extendTheme({ colors });
