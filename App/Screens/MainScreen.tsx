import { SafeAreaView, FlatList } from "react-native";
import { News } from "../types";
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

export default function MainScreen() {
  const { theme, language } = useContext(SettingsContext);
  const styles = getStyles(theme);

  const textTranslations = translations[language];

  const [actualCategory, setActualCategory] = useState("Latest");
  const { isLoading, actualNews } = useFetchNews(actualCategory);

  return (
    <SafeAreaView style={styles.mainContainer}>
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
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.newsContainer}
          data={actualNews}
          ListEmptyComponent={() => (
            <NothingToSeeMsg message={textTranslations.error} />
          )}
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
