import { Image, Linking, Modal, SafeAreaView, Text } from "react-native";
import { News } from "../types";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { EvilIcons } from "@expo/vector-icons";

interface Props {
  data: News;
  visible: boolean;
  handleModal: () => void;
}

export function NewsModal({ data, visible, handleModal }: Props) {
  const { theme } = useContext(SettingsContext);
  const styles = getStyles(theme);

  return (
    <Modal animationType="slide" visible={visible}>
      <SafeAreaView style={styles.modal}>
        <EvilIcons
          onPress={handleModal}
          style={styles.modalHeaderIcon}
          name="close"
        />
        <Image
          style={styles.modalImg}
          source={
            data.urlToImage
              ? { uri: data.urlToImage }
              : {
                  uri: "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
                }
          }
        />
        <Text style={styles.modalHeaderTitle}>{data.title}</Text>
        {data.author && (
          <Text style={styles.textColorNormal}>
            By : <Text style={styles.spanDetails}>{data.author}</Text>
          </Text>
        )}
        <Text style={styles.modalContent}>
          {data.content
            ? data.content
            : "This new doesn't have a description, click on continue reading"}
        </Text>
        <Text
          onPress={() => Linking.openURL(data.url)}
          style={styles.textColorNormal}
        >
          To Continue reading <Text style={styles.spanDetails}>Click Here</Text>
        </Text>
      </SafeAreaView>
    </Modal>
  );
}
