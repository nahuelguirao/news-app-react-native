import { FlatList, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { NothingToSeeMsg } from "../Components/NothingToSeeMsg";
import { News } from "../types";
import { RenderNewsPreview } from "../Components/RenderNewsPreview";
import { Loading } from "../Components/Loading";
import { useFetchSearch } from "../hooks/useFetchSearch";
import { translations } from "../Translations/main";

export default function SearchScreen() {
  //Styles & Translations
  const { theme, language } = useContext(SettingsContext);
  const styles = getStyles(theme);
  const textTranslations = translations[language];

  const {
    isLoading,
    searchResult,
    totalResults,
    searchValue,
    setSearchValue,
    handleNextPage,
    handlePrevPage,
    actualPage,
    firstSearch,
  } = useFetchSearch();

  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.textColorNormal, styles.searchLabel]}>
        {textTranslations.searchNews}
      </Text>
      <TextInput
        style={[styles.textColorNormal, styles.searchInput]}
        placeholder={textTranslations.placeHolder}
        placeholderTextColor={theme == "Dark" ? "#EEEEEE" : "#202020"}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.newsContainer}
          data={searchResult}
          // RENDER EACH ITEM
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
          // EMPTY RESULT
          ListEmptyComponent={() =>
            !firstSearch ? (
              <NothingToSeeMsg message={textTranslations.nothingToSee} />
            ) : (
              <NothingToSeeMsg message={textTranslations.startSearching} />
            )
          }
          // NAVIGATION
          ListFooterComponent={() =>
            totalResults > 20 && (
              <View style={styles.flatListNavigation}>
                <MaterialIcons
                  onPress={handlePrevPage}
                  name="navigate-before"
                  size={42}
                  color={theme == "Dark" ? "#CF6679" : "#1166EE"}
                />
                <Text style={styles.textColorNormal}>
                  {textTranslations.actualPage}: {actualPage}
                </Text>
                <MaterialIcons
                  onPress={handleNextPage}
                  name="navigate-next"
                  size={42}
                  color={theme == "Dark" ? "#CF6679" : "#1166EE"}
                />
              </View>
            )
          }
        />
      )}
    </View>
  );
}
