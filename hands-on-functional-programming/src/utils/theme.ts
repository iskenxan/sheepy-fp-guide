import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
export const colors = {
  bgColor: "var(--vscode-textCodeBlock-background)",
  fgColor: "var(--vscode-foreground)",
  fontSize: "var(--vscode-editor-font-size)",
  linkColor: "#2196F3",
  primary: {
    50: "#f2eaff",
    100: "#d4c4f1",
    200: "#b69ee2",
    300: "#9977d5",
    400: "#7c51c8",
    500: "#6237ae",
    600: "#4c2b89",
    700: "#361e63",
    800: "#21113d",
    900: "#0d041a"
  }
};

export const theme = extendTheme({ colors });
