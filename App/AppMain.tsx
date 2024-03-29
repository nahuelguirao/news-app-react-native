import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./Screens/MainScreen";
import SearchScreen from "./Screens/SearchScreen";
import { getStyles } from "./Styles/main";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppContent() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme == "Dark" ? "light-content" : "dark-content"}
        backgroundColor={theme == "Dark" ? "#202020" : "#DDDDDD"}
      />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
        <FontAwesome name="newspaper-o" style={styles.headerIcon} />
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme == "Dark" ? "#CF6679" : "#1166EE",
          tabBarInactiveTintColor: theme == "Dark" ? "#EEEEEE" : "#202020",
          tabBarStyle: {
            backgroundColor: theme == "Dark" ? "#202020" : "#DDDDDD",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="newspaper-o"
                size={20}
                color={
                  focused
                    ? theme == "Dark"
                      ? "#CF6679"
                      : "#1166EE"
                    : theme == "Dark"
                    ? "#EEEEEE"
                    : "#202020"
                }
              />
            ),
          }}
          name="Main"
          component={MainScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="search"
                size={20}
                color={
                  focused
                    ? theme == "Dark"
                      ? "#CF6679"
                      : "#1166EE"
                    : theme == "Dark"
                    ? "#EEEEEE"
                    : "#202020"
                }
              />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          name="ChangeTheme"
          options={{
            tabBarIcon: ({ focused, size }) => (
              <TouchableOpacity onPress={toggleTheme}>
                <FontAwesome
                  name="adjust"
                  size={size}
                  color={theme == "Dark" ? "#EEEEEE" : "#202020"}
                />
              </TouchableOpacity>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              toggleTheme();
            },
          }}
        >
          {({ route, navigation }) => {
            return null;
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
