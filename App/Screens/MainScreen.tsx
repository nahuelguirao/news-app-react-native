import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { News } from "../types";
import { styles } from "../Styles/main";
import { RenderNewsPreview } from "../Components/RenderNewsPreview";
import { RenderCategory } from "../Components/RenderCategory";
import { NothingToSeeMsg } from "../Components/NothingToSeeMsg";
import { useFetchNews } from "../hooks/useFetchNews";
import { useState } from "react";
import { categories } from "../../global";
import { FontAwesome } from "@expo/vector-icons";

export default function MainScreen() {
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
        <ActivityIndicator size="large" color="#CF6679" style={styles.loader} />
      ) : (
        <FlatList
          style={styles.newsContainer}
          data={actualNews}
          ListEmptyComponent={() => <NothingToSeeMsg />}
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
