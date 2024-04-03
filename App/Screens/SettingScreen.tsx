import { useContext } from "react";
import { Text, View } from "react-native";
import { SettingsContext } from "../Context/SettingsContext";
import { getStyles } from "../Styles/main";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";

export function SettingScreen() {
  const { theme, toggleTheme, country, toggleCountry } =
    useContext(SettingsContext);

  const styles = getStyles(theme);
  return (
    <View style={[styles.mainContainer, { paddingTop: 30 }]}>
      <Text style={[styles.textColorNormal, { fontSize: 18 }]}>
        Settings (Click an icon to make a change)
      </Text>
      <View style={styles.settingContainer}>
        <Text style={[styles.textColorNormal, styles.settingTitle]}>
          Switch Theme:
        </Text>
        <MaterialCommunityIcons
          style={styles.settingIcon}
          name="theme-light-dark"
          color="black"
          onPress={toggleTheme}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={[styles.textColorNormal, styles.settingTitle]}>
          Switch Language:
        </Text>
        {country == "us" ? (
          <Text onPress={toggleCountry} style={{ height: 50 }}>
            <CountryFlag isoCode="ar" size={25} />
          </Text>
        ) : (
          <Text onPress={toggleCountry} style={{ height: 50 }}>
            <CountryFlag isoCode="us" size={25} />
          </Text>
        )}
      </View>
    </View>
  );
}
