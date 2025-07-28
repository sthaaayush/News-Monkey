import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default function App() {
  //Initial API
  const [apiUrl, setApiUrl] = useState('https://newsapi.org/v2/everything?q=all&apiKey=e94d7e00913f4d4b93934d70da67c725');

  //Search function
  const searchNews = (urlVal) => {
    urlVal && setApiUrl(`https://newsapi.org/v2/everything?q=${urlVal.toLowerCase()}&apiKey=e94d7e00913f4d4b93934d70da67c725`);
    newsResponse();
  }

  const [articles, setArticles] = useState([]);

  //Async func to call NewsAPI
  const newsResponse = async () => {
    let response = await fetch(apiUrl);
    let jsonVal = await response.json();
    setArticles(jsonVal.articles || []);
  }

  //Initially call API wit all Query
  useEffect(() => {
    newsResponse();
  }, []);

  return (
    <div>
      <Navbar searchNews={searchNews} />
      <NewsComponent BASE_URL={apiUrl} articles={articles} />
    </div>
  )
}
