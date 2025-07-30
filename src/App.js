/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './Components/SidePanel';
import Home from './Components/Home';

export default function App() {
  //Initial APIs list
  const apiKeys = [
    'e94d7e00913f4d4b93934d70da67c725',
    'a9dd67967a9a408b989b0ec5315b369b',
    '6cd60c1705184916a4fad4514e9350b7'
    // Add more keys if you have
  ];
  const [apiKeyIndex, setApiKeyIndex] = useState(0); //Increase if one key is exhausted 
  const [API_KEY, setAPI_KEY] = useState(apiKeys[apiKeyIndex]); //Get working API
  const [apiUrl, setApiUrl] = useState("https://newsapi.org/v2/everything?q=all&apiKey=" + API_KEY); //Set API with working key and prevent Key leakage
  const [articles, setArticles] = useState([]); //Get response fro API
  const [theme, setTheme] = useState('light'); //Theme by default 'light'
  const [themeIcon, setThemeIcon] = useState('brightness-high'); //Dark Mode icon
  const [categoryName, setCategoryName] = useState();//category name to be display according to searched or clicked

  //Search function
  const searchNews = (urlVal) => {
    urlVal && setApiUrl(`https://newsapi.org/v2/everything?q=${urlVal.toLowerCase()}&apiKey=${API_KEY}`);
    newsResponse();
    setCategoryName(urlVal);
    setTimeout(() => { setCategoryName('') }, 5000);
  }

  //Category function
  const categoryNews = (urlVal) => {
    urlVal && setApiUrl(`https://newsapi.org/v2/everything?q=${urlVal.toLowerCase()}&apiKey=${API_KEY}`);
    newsResponse();
    setCategoryName(urlVal);
    setTimeout(() => { setCategoryName('') }, 5000);
  }
  //Dark Mode
  const changeTheme = () => {
    if (theme === 'light') {
      document.querySelector('body').style.background = 'lightgray';
      setTheme('dark');
      setThemeIcon('moon-stars');
    } else {
      document.querySelector('body').style.background = 'white';
      setTheme('light')
      setThemeIcon('brightness-high');
    }
  }

  //Async func to call NewsAPI
  const newsResponse = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonVal = await response.json();

      if (response.status === 429) { //Check for Too many request issue
        if (apiKeyIndex + 1 < apiKeys.length) { //Check for available key
          console.warn("API limit hit. Switching API key...");
          const newIndex = apiKeyIndex + 1;
          setApiKeyIndex(newIndex);
          setAPI_KEY(apiKeys[newIndex]);
          setApiUrl(prev => prev.replace(apiKeys[apiKeyIndex], apiKeys[newIndex]));
        } else { //If all key is used
          console.error("All API keys exhausted. Please wait 24 hours.");
          setArticles([]);
        }
      } else if (!jsonVal.articles) { //If API has no data
        console.error("No articles returned from API:", jsonVal);
        setArticles([]);
      } else { //If everything goes well store response
        setArticles(jsonVal.articles);
      }

    } catch (err) { //If any error occurs
      console.error("Fetch failed:", err);
      setArticles([]);
    }
  }

  // Show button only when scrolled down
  window.onscroll = () => {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top on click
  const backTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [pageVal, setPageVal] = useState(0); //number of article according to page number
  const [articlesData, setArticlesData] = useState(articles.slice(0, 9)); //set by default 9 articles and change according to page number
  const [pageNumber, setPageNumber] = useState(0);//page number

  // Page Change Handler
  const innerPageHandler = (direction) => {
    let newPageNumber = pageNumber;
    let newPageVal = pageVal;

    if (direction === 'decrease' && pageNumber > 0) {
      newPageNumber = pageNumber - 1;
      newPageVal = pageVal - 9;
    } else if (direction === 'increase' && (pageNumber + 1) * 9 < articles.length) {
      newPageNumber = pageNumber + 1;
      newPageVal = pageVal + 9;
    } else {
      // Out of bounds, do nothing
      return;
    }

    // Now update states
    setPageNumber(newPageNumber);
    setPageVal(newPageVal);
    setArticlesData(articles.slice(newPageVal, newPageVal + 9));
    // console.log("Showing articles from", newPageVal, "to", newPageVal + 9); //Using for debugging
  };

  //Initially call API with "all" Query
  useEffect(() => {
    newsResponse();
  }, [apiUrl]);

  //Initially NewsComponent, Page number and 9 articles to default value
  useEffect(() => {
    if (articles.length > 0) {
      setArticlesData(articles.slice(0, 9));
      setPageVal(0);
      setPageNumber(0);
    }
  }, [articles]);

  return (
    <>
      <Router>
        <Navbar searchNews={searchNews} changeTheme={changeTheme} themeIcon={themeIcon} theme={theme} articlesData={articlesData} />
        <p className='text-center position-fixed start-50 translate-middle z-3'>{categoryName && <code className="categoryName  fs-6" >viewing result of "{categoryName}"</code>}</p>
        <Routes>
          <Route exact path="/" element={
            <Home theme={theme}/>
          }></Route>

          <Route exact path="/newsFeed" element={
            <NewsComponent BASE_URL={apiUrl} articles={articles} articlesData={articlesData} theme={theme} innerPageHandler={innerPageHandler} pageNumber={pageNumber} />
          }></Route>

          <Route exact path="/about" element={
            <About theme={theme} />
          }></Route>
        </Routes>
        <SidePanel theme={theme} categoryNews={categoryNews} />
        <button type="button" className={`btn btn-${theme === 'light' ? 'dark' : 'light'} position-fixed bottom-0 end-0 m-4 rounded-circle`} id='backToTopBtn' onClick={backTotop}>
          <i className="bi bi-arrow-up-circle fs-3"></i>
        </button>
      </Router>
    </>
  )
}
