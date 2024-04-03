import { ActivityIndicator } from "react-native";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";

export function Loading() {
  const { theme } = useContext(SettingsContext);
  const styles = getStyles(theme);
  return (
    <ActivityIndicator
      size="large"
      color={theme == "Dark" ? "#CF6679" : "#1166EE"}
      style={styles.loader}
    />
  );
}
