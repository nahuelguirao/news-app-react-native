import { Image, Text, TouchableOpacity, View } from "react-native";
import { News } from "../types";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { NewsModal } from "./NewsModal";
import { useShowModal } from "../hooks/useShowModal";
import { translations } from "../Translations/main";

export function RenderNewsPreview({ item }: { item: News }) {
  const { theme, language } = useContext(SettingsContext);
  const styles = getStyles(theme);
  const { handleModal, modalVisible } = useShowModal();

  const textTranslations = translations[language];

  if (item.title !== "[Removed]") {
    return (
      <TouchableOpacity style={styles.card} onPress={handleModal}>
        <NewsModal
          data={item}
          visible={modalVisible}
          handleModal={handleModal}
        />
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
              {textTranslations.by}
              <Text style={styles.spanDetails} ellipsizeMode="tail">
                {item.author}
              </Text>
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
}
