import { Text, TouchableOpacity } from "react-native";
import { styles } from "../Styles/main";
import { Dispatch } from "react";

interface Props {
  item: string;
  setActualCategory: Dispatch<string>;
  actualCategory: string;
}

export function RenderCategory({
  item,
  setActualCategory,
  actualCategory,
}: Props) {
  return (
    <TouchableOpacity onPress={() => setActualCategory(item)}>
      <Text
        style={[
          styles.searchCategory,
          actualCategory == item && styles.actualCategory,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}
