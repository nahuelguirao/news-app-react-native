import { Image, Text, View } from "react-native";
import { News } from "../types";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function RenderNewsPreview({ item }: { item: News }) {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  if (item.title !== "[Removed]") {
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={
            item.urlToImage
              ? { uri: item.urlToImage }
              : {
                  uri: "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
                }
          }
        />
        <View style={styles.cardPreview}>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.cardTitle}>
            {item.title}
          </Text>
          {item.author && item.author.length < 60 && (
            <Text style={styles.cardBy}>
              By{" "}
              <Text style={styles.spanDetails} ellipsizeMode="tail">
                {item.author}
              </Text>
            </Text>
          )}
        </View>
      </View>
    );
  } else {
    return null;
  }
}
