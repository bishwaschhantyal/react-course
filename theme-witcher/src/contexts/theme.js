import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: 'light',
    darkMode: () => {},
    lightMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export function useThemeContext() {
    return useContext(ThemeContext);
}