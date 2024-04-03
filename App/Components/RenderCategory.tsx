import { Text, TouchableOpacity } from "react-native";
import { getStyles } from "../Styles/main";
import { Dispatch, useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";

interface Props {
  item: { name: string; value: string };
  setActualCategory: Dispatch<string>;
  actualCategory: string;
}

export function RenderCategory({
  item,
  setActualCategory,
  actualCategory,
}: Props) {
  const { theme } = useContext(SettingsContext);
  const styles = getStyles(theme);
  return (
    <TouchableOpacity onPress={() => setActualCategory(item.value)}>
      <Text
        style={[
          styles.searchCategory,
          actualCategory == item.value && styles.actualCategory,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
