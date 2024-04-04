import { useContext, useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../global";
import { SettingsContext } from "../Context/SettingsContext";
import { News } from "../types";

export function useFetchNews(actualCategory: string) {
  const { country } = useContext(SettingsContext);
  const [actualNews, setActualNews] = useState<News[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let url = `${BASE_URL}?country=${country}&apiKey=${API_KEY}`;

      if (actualCategory !== "Latest") {
        url += `&category=${actualCategory.toLowerCase()}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.articles) {
        setActualNews(data.articles);
      } else {
        throw new Error("No articles found.");
      }
    } catch {
      setError("Error getting information");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [actualCategory, country]);

  return { isLoading, actualNews, error };
}
