import { ActivityIndicator } from "react-native";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function Loading() {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <ActivityIndicator
      size="large"
      color={theme == "Dark" ? "#CF6679" : "#1166EE"}
      style={styles.loader}
    />
  );
}
