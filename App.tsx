import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./App/Screens/MainScreen";
import { FontAwesome } from "@expo/vector-icons";
import SearchScreen from "./App/Screens/SearchScreen";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./App/Styles/main";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
        <FontAwesome name="newspaper-o" style={styles.headerIcon} />
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#CF6679",
          tabBarInactiveTintColor: "#EEEE",
          tabBarStyle: {
            backgroundColor: "#202020",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="newspaper-o"
                size={20}
                color={focused ? "#CF6679" : "#eeee"}
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
                color={focused ? "#CF6679" : "#eeee"}
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
              <TouchableOpacity onPress={() => Alert.alert("hola")}>
                <FontAwesome
                  name="adjust"
                  size={size}
                  color={focused ? "#CF6679" : "#eeee"}
                />
              </TouchableOpacity>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
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
