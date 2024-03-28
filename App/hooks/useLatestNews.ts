import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../global";

export function useLatestNews() {
  const [latestNews, setLatestNews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLatest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}?country=us&apiKey=${API_KEY}`);

      const data = await response.json();

      setLatestNews(data.articles);
    } catch {
      setError("Error getting information.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return { isLoading, latestNews, error };
}
