import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#555",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a1c1f",
      paper: "#242628",
    },
    text: {
      primary: "#e8e8e8",
      secondary: "#b7b7b7",
    },
  },
});
