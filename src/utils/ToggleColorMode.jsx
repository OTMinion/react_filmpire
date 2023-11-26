/*eslint-disable quotes*/
import React, { useState, useMemo, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext();

function ToggleColorMode({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      //eslint-disable-next-line implicit-arrow-linebreak
      createTheme({
        palette: {
          mode,
        },
      }),
    //eslint-disable-next-line comma-dangle
    [mode]
  ); //theme will only change when mode changes

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(() => ({ mode, setMode, toggleColorMode }), [mode, setMode, toggleColorMode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
