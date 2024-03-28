import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { API_KEY, BASE_URL } from "./global";
import { News } from "./App/types";
import { styles } from "./App/Styles/main";

export default function App() {
  const [latestNews, setLatestNews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchLatest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?country=us&apiKey=${API_KEY}`);

      const data = await response.json();

      setLatestNews(data.articles);
    } catch (err) {
      Alert.alert("Something go wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <SafeAreaView style={[styles.background, styles.mainContainer]}>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <View style={styles.header}>
        <Text style={styles.mainText}>
          News <Text style={styles.spanDetails}>App</Text>
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={latestNews}
          ListEmptyComponent={() => (
            <Text style={styles.emptyMessage}>Nothing to see here!</Text>
          )}
          renderItem={({ item }: { item: News }) => {
            if (item.title !== "[Removed]") {
              return (
                <View style={styles.card}>
                  <Image
                    style={{ width: 125, height: 100, borderRadius: 16 }}
                    source={
                      item.urlToImage ? { uri: item.urlToImage } : undefined
                    }
                  />
                  <View style={styles.cardPreview}>
                    <Text
                      numberOfLines={4}
                      ellipsizeMode="tail"
                      style={styles.cardTitle}
                    >
                      {item.title}
                    </Text>
                    {item.author && item.author.length < 50 && (
                      <Text style={styles.cardBy}>
                        By <Text style={styles.spanDetails}>{item.author}</Text>
                      </Text>
                    )}
                  </View>
                </View>
              );
            } else {
              return null;
            }
          }}
        />
      )}
    </SafeAreaView>
  );
}
