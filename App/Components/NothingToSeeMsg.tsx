import { Text } from "react-native";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function NothingToSeeMsg({ message }: { message: string }) {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return <Text style={styles.emptyMessage}>{message}</Text>;
}
