import { FlatList, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStyles } from "../Styles/main";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { NothingToSeeMsg } from "../Components/NothingToSeeMsg";
import { News } from "../types";
import { RenderNewsPreview } from "../Components/RenderNewsPreview";
import { Loading } from "../Components/Loading";
import { useFetchSearch } from "../hooks/useFetchSearch";

export default function SearchScreen() {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

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
        Search News:
      </Text>
      <TextInput
        style={[styles.textColorNormal, styles.searchInput]}
        placeholder="Try Bitcoin, FIFA..."
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
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
          ListEmptyComponent={() =>
            !firstSearch ? (
              <NothingToSeeMsg message="Nothing to see here, try again!" />
            ) : (
              <NothingToSeeMsg message="Start searching!" />
            )
          }
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
                  Actual page: {actualPage}
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
