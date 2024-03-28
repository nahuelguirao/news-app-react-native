import { Image, Text, View } from "react-native";
import { News } from "../types";
import { styles } from "../Styles/main";

export function RenderNewsPreview({ item }: { item: News }) {
  if (item.title !== "[Removed]") {
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={item.urlToImage ? { uri: item.urlToImage } : undefined}
        />
        <View style={styles.cardPreview}>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.cardTitle}>
            {item.title}
          </Text>
          {item.author && item.author.length < 50 && (
            <Text style={styles.cardBy}>
              By <Text style={styles.spanDetails}>{item.author}</Text>
            </Text>
          )}
        </View>
      </View>
    );
  } else {
    return null;
  }
}
