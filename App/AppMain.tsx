import {useContext} from 'react';
import {SettingsContext} from './Context/SettingsContext';
import {StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './Screens/MainScreen';
import SearchScreen from './Screens/SearchScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SettingScreen} from './Screens/SettingScreen';
import {translations} from './Translations/main';
import {getStyles} from './Styles/main';

const Tab = createBottomTabNavigator();

export default function AppContent() {
  const {theme, language} = useContext(SettingsContext);
  const styles = getStyles(theme);
  const textTranslations: any = translations[language];

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme == 'Dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme == 'Dark' ? '#202020' : '#DDDDDD'}
      />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
        {/* <Icon2 name="newspaper-o" style={styles.headerIcon} /> */}
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme == 'Dark' ? '#CF6679' : '#1166EE',
          tabBarInactiveTintColor: theme == 'Dark' ? '#EEEEEE' : '#202020',
          tabBarStyle: {
            backgroundColor: theme == 'Dark' ? '#202020' : '#DDDDDD',
            borderTopWidth: 1,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="newspaper-o"
                size={18}
                color={
                  focused
                    ? theme == 'Dark'
                      ? '#CF6679'
                      : '#1166EE'
                    : theme == 'Dark'
                    ? '#EEEEEE'
                    : '#202020'
                }
              />
            ),
          }}
          name={textTranslations.main}
          component={MainScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="search"
                size={18}
                color={
                  focused
                    ? theme == 'Dark'
                      ? '#CF6679'
                      : '#1166EE'
                    : theme == 'Dark'
                    ? '#EEEEEE'
                    : '#202020'
                }
              />
            ),
          }}
          name={textTranslations.search}
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name="settings"
                size={20}
                color={
                  focused
                    ? theme == 'Dark'
                      ? '#CF6679'
                      : '#1166EE'
                    : theme == 'Dark'
                    ? '#EEEEEE'
                    : '#202020'
                }
              />
            ),
          }}
          name={textTranslations.settings}
          component={SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
