import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: "light" });
export const useColorMode = () => useContext(ColorModeContext);

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "light");

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("mode", next);
          return next;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "light" ? "#1976d2" : "#90caf9" },
        },
        shape: { borderRadius: 12 },
      }),
    [mode]
  );

  useEffect(() => {
    document.querySelector("meta[name='theme-color']")?.setAttribute(
      "content",
      mode === "light" ? "#ffffff" : "#121212"
    );
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
