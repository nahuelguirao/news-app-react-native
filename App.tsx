import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { News } from "./App/types";
import { styles } from "./App/Styles/main";
import { RenderNewsPreview } from "./App/Components/RenderNewsPreview";
import { NothingToSeeMsg } from "./App/Components/NothingToSeeMsg";
import { useFetchNews } from "./App/hooks/useFetchNews";
import { useState } from "react";
import { categories } from "./global";
import { FontAwesome } from "@expo/vector-icons";
import { RenderCategory } from "./App/Components/RenderCategory";

export default function App() {
  const [actualCategory, setActualCategory] = useState("Latest");
  const { isLoading, actualNews } = useFetchNews(actualCategory);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
        <FontAwesome name="newspaper-o" style={styles.headerIcon} />
      </View>
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
        <ActivityIndicator size="large" style={styles.loader} />
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
