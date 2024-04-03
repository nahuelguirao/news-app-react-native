import { Text } from "react-native";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";

export function NothingToSeeMsg({ message }: { message: string }) {
  const { theme } = useContext(SettingsContext);
  const styles = getStyles(theme);

  return <Text style={styles.emptyMessage}>{message}</Text>;
}
