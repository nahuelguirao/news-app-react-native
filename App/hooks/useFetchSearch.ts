import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { API_KEY } from "../../global";

export function useFetchSearch() {
  //STATES
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstSearch, setFirstSearch] = useState(true);
  const [actualPage, setActualPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  //Fetching
  const fetchSearch = async () => {
    try {
      if (searchValue.length >= 1) {
        setFirstSearch(false);
        setIsLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}&pageSize=20&page=${actualPage}`
        );
        const data = await response.json();
        setSearchResult(data.articles);
        setTotalResults(data.totalResults);
      } else {
        setFirstSearch(true);
        setSearchResult([]);
        setTotalResults(1);
      }
    } catch {
      setError("Error getting search results.");
    } finally {
      setIsLoading(false);
    }
  };

  //Search pagination
  const handlePrevPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1);
    }
  };

  const handleNextPage = () => {
    if (actualPage < totalResults / 20) {
      setActualPage(actualPage + 1);
    }
  };

  //Search value debounced and useEffect
  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    fetchSearch();
  }, [debouncedValue, actualPage]);

  return {
    isLoading,
    error,
    searchResult,
    totalResults,
    searchValue,
    setSearchValue,
    firstSearch,
    actualPage,
    handleNextPage,
    handlePrevPage,
  };
}
