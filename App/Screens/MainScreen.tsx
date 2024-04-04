import { SafeAreaView, FlatList, ScrollView, View } from "react-native";
import { getStyles } from "../Styles/main";
import { RenderNewsPreview } from "../Components/RenderNewsPreview";
import { RenderCategory } from "../Components/RenderCategory";
import { NothingToSeeMsg } from "../Components/NothingToSeeMsg";
import { useFetchNews } from "../hooks/useFetchNews";
import { useContext, useState } from "react";
import { categoriesES, categoriesEN } from "../../global";
import { SettingsContext } from "../Context/SettingsContext";
import { Loading } from "../Components/Loading";
import { translations } from "../Translations/main";
import { RenderBigImgs } from "../Components/RenderBigImgs";

export default function MainScreen() {
  // Styles & Translations
  const { theme, language } = useContext(SettingsContext);
  const styles = getStyles(theme);
  const textTranslations = translations[language];

  //News & Actual Category state
  const [actualCategory, setActualCategory] = useState("Latest");
  const { isLoading, actualNews } = useFetchNews(actualCategory);
  const reversedNews = actualNews ? actualNews.slice().reverse() : [];
  const fiveNews = reversedNews.slice(0, 5);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* CATEGORIES */}
      <FlatList
        style={styles.searchCategoryContainer}
        horizontal
        data={language == "es" ? categoriesES : categoriesEN}
        renderItem={({ item }: { item: { name: string; value: string } }) => (
          <RenderCategory
            item={item}
            actualCategory={actualCategory}
            setActualCategory={setActualCategory}
          />
        )}
      />
      {/* NEWS FLAT LIST */}
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.newsContainer}
          data={actualNews}
          ListHeaderComponent={() => (
            <FlatList
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              style={styles.mainImgs}
              horizontal
              data={fiveNews}
              renderItem={({ item }) => <RenderBigImgs item={item} />}
            />
          )}
          ListEmptyComponent={() => (
            <NothingToSeeMsg message={textTranslations.error} />
          )}
          renderItem={({ item }) => <RenderNewsPreview item={item} />}
        />
      )}
    </SafeAreaView>
  );
}
