import {useContext} from 'react';
import {Text, View} from 'react-native';
import {SettingsContext} from '../Context/SettingsContext';
import {getStyles} from '../Styles/main';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryFlag from 'react-native-country-flag';
import {translations} from '../Translations/main';

export function SettingScreen() {
  //Settings
  const {theme, toggleTheme, country, toggleCountry, language} =
    useContext(SettingsContext);

  //Styles & Translations
  const styles = getStyles(theme);
  const textTranslations = translations[language];

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={[styles.textColorNormal, {fontSize: 18}]}>
          {textTranslations.settingsTitle}
        </Text>
        {/* THEME SETTINGS */}
        <View style={styles.settingContainer}>
          <Text style={[styles.textColorNormal, styles.settingTitle]}>
            {textTranslations.switchTheme}
          </Text>
          <Icon
            style={styles.settingIcon}
            name="theme-light-dark"
            color="black"
            onPress={toggleTheme}
          />
        </View>
        {/* LANGUAGE SETTINGS */}
        <View style={styles.settingContainer}>
          <Text style={[styles.textColorNormal, styles.settingTitle]}>
            {textTranslations.switchLanguage}
          </Text>
          {country == 'us' ? (
            <Text onPress={toggleCountry} style={{height: 50}}>
              <CountryFlag isoCode="ar" size={25} />
            </Text>
          ) : (
            <Text onPress={toggleCountry} style={{height: 50}}>
              <CountryFlag isoCode="us" size={25} />
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
