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
import { useLatestNews } from "./App/hooks/useLatestNews";

export default function App() {
  const { isLoading, latestNews } = useLatestNews();

  return (
    <SafeAreaView style={[styles.background, styles.mainContainer]}>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={latestNews}
          ListEmptyComponent={() => <NothingToSeeMsg />}
          renderItem={({ item }: { item: News }) => (
            <RenderNewsPreview item={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
