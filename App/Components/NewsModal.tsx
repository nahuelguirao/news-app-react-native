import {Image, Linking, Modal, SafeAreaView, Text} from 'react-native';
import {News} from '../types';
import {getStyles} from '../Styles/main';
import {useContext} from 'react';
import {SettingsContext} from '../Context/SettingsContext';
import Icon from 'react-native-vector-icons/AntDesign';
import {translations} from '../Translations/main';

interface Props {
  data: News;
  visible: boolean;
  handleModal: () => void;
}

export function NewsModal({data, visible, handleModal}: Props) {
  // Styles and translations
  const {theme, language} = useContext(SettingsContext);
  const styles = getStyles(theme);
  const textTranslations = translations[language];

  return (
    <Modal animationType="slide" onRequestClose={handleModal} visible={visible}>
      <SafeAreaView style={styles.modal}>
        <Icon
          name="close"
          onPress={handleModal}
          style={styles.modalHeaderIcon}
        />
        <Image
          style={styles.modalImg}
          source={
            data.urlToImage
              ? {uri: data.urlToImage}
              : {
                  uri: 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png',
                }
          }
        />
        <Text style={styles.modalHeaderTitle}>{data.title}</Text>
        {data.author && (
          <Text style={styles.textColorNormal}>
            {textTranslations.by}{' '}
            <Text style={styles.spanDetails}>{data.author}</Text>
          </Text>
        )}
        <Text style={styles.modalContent}>
          {data.content ? data.content : textTranslations.noDescription}
        </Text>
        <Text
          onPress={() => Linking.openURL(data.url)}
          style={styles.textColorNormal}>
          {textTranslations.toContinueReading}
          <Text style={styles.spanDetails}> {textTranslations.clickHere}</Text>
        </Text>
      </SafeAreaView>
    </Modal>
  );
}
