import {ReactNode, createContext, useState} from 'react';
import {ToastAndroid} from 'react-native';

interface ContextProps {
  theme: string;
  toggleTheme: () => void;
  country: string;
  language: string;
  toggleCountry: () => void;
}

export const SettingsContext = createContext<ContextProps>({
  theme: 'Dark',
  toggleTheme: () => {},
  country: 'us',
  language: 'en',
  toggleCountry: () => {},
});

////////////////////////////////////

interface ProviderProps {
  children: ReactNode;
}

export const SettingsContextProvider = ({children}: ProviderProps) => {
  //THEME
  const [theme, setTheme] = useState('Dark');

  //COUNTRY AND LANGUAGE
  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    theme == 'Dark' ? setTheme('Light') : setTheme('Dark');
    const toastMessage =
      theme === 'Dark'
        ? language == 'es'
          ? 'Cambiando a tema claro'
          : 'Switched to Light theme'
        : language == 'es'
        ? 'Cambiando a tema oscuro'
        : 'Switched to Dark theme';
    ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
  };

  const toggleCountry = () => {
    country == 'us' ? setCountry('ar') : setCountry('us');
    country == 'us' ? setLanguage('es') : setLanguage('en');
    const toastMessage =
      language == 'en'
        ? 'Ahora el idioma es español.'
        : 'Now language is english';
    ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
  };

  const values = {theme, toggleTheme, country, language, toggleCountry};

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};
