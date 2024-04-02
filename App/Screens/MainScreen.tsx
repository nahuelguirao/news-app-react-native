import { SafeAreaView, FlatList } from "react-native";
import { News } from "../types";
import { getStyles } from "../Styles/main";
import { RenderNewsPreview } from "../Components/RenderNewsPreview";
import { RenderCategory } from "../Components/RenderCategory";
import { NothingToSeeMsg } from "../Components/NothingToSeeMsg";
import { useFetchNews } from "../hooks/useFetchNews";
import { useContext, useState } from "react";
import { categories } from "../../global";
import { ThemeContext } from "../Context/ThemeContext";
import { Loading } from "../Components/Loading";

export default function MainScreen() {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const [actualCategory, setActualCategory] = useState("Latest");
  const { isLoading, actualNews } = useFetchNews(actualCategory);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        style={styles.searchCategoryContainer}
        horizontal
        data={categories}
        renderItem={({ item }) => (
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
            <NothingToSeeMsg message="Error loading content, try again!" />
          )}
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
