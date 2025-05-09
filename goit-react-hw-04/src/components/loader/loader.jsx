import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage } from "../errorMessage/errorMessage";

export const Loader = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "<https://hn.algolia.com/api/v1/search?query=react>"
        );
        setArticles(response.data.hits);
      } catch { // (error)
				// Ustawienie stanu error na true
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);


    const App = () => {

        /* Pozostała część kodu */
    }
	return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
