import { Image, Text, TouchableOpacity, View } from "react-native";
import { News } from "../types";
import { NewsModal } from "./NewsModal";
import { useShowModal } from "../hooks/useShowModal";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { getStyles } from "../Styles/main";

export function RenderBigImgs({ item }: { item: News }) {
  const { theme } = useContext(SettingsContext);
  const styles = getStyles(theme);

  //SHOW/HIDE modal
  const { handleModal, modalVisible } = useShowModal();

  if (item.urlToImage) {
    return (
      <TouchableOpacity onPress={handleModal}>
        <NewsModal
          data={item}
          visible={modalVisible}
          handleModal={handleModal}
        />
        <View style={styles.mainImgsBox}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.mainImgsTitle}
          >
            {item.title}
          </Text>
          <Image
            style={styles.mainImgsImg}
            resizeMode="cover"
            source={
              item.urlToImage
                ? { uri: item.urlToImage }
                : {
                    uri: "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
                  }
            }
          />
        </View>
      </TouchableOpacity>
    );
  }
}
