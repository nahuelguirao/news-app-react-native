import { ReactNode, createContext, useState } from "react";
import { ToastAndroid } from "react-native";

interface ContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: "Dark",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    theme == "Dark" ? setTheme("Light") : setTheme("Dark");
    const toastMessage =
      theme === "Dark" ? "Switched to Light theme" : "Switched to Dark theme";
    ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
