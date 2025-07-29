import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './Components/SidePanel';

export default function App() {
  //Initial API
  const API_KEY = 'e94d7e00913f4d4b93934d70da67c725';
  const [apiUrl, setApiUrl] = useState("https://newsapi.org/v2/everything?q=all&apiKey=" + API_KEY);
  const [articles, setArticles] = useState([]);
  const [theme, setTheme] = useState('light');
  const [themeIcon, setThemeIcon] = useState('brightness-high');

  //Search function
  const searchNews = (urlVal) => {
    urlVal && setApiUrl(`https://newsapi.org/v2/everything?q=${urlVal.toLowerCase()}&apiKey=${API_KEY}`);
    newsResponse();
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

      if (!jsonVal.articles) {
        console.error("No articles returned from API:", jsonVal);
        setArticles([]);
      } else {
        setArticles(jsonVal.articles);
      }

    } catch (err) {
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

  const [pageVal, setPageVal] = useState(0);
  const [articlesData, setArticlesData] = useState(articles.slice(0, 9));
  const [pageNumber, setPageNumber] = useState(0);

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

  //Initially call API wit all Query
  useEffect(() => {
    newsResponse();
  }, [apiUrl]);

  //Initially NewsComponent default value
  useEffect(() => {
    if (articles.length > 0) {
      setArticlesData(articles.slice(0, 9));
      setPageVal(0);
      setPageNumber(0);
    }
  }, [articles]);

  return (
    <div>
      <Router>
        <Navbar searchNews={searchNews} changeTheme={changeTheme} themeIcon={themeIcon} theme={theme} articlesData={articlesData} />
        <Routes>
          <Route exact path="/" element={
            <NewsComponent BASE_URL={apiUrl} articles={articles} articlesData={articlesData} theme={theme} innerPageHandler={innerPageHandler} pageNumber={pageNumber} />
          }></Route>

          <Route exact path="/about" element={
            <About theme={theme} />
          }></Route>
        </Routes>
        <SidePanel theme={theme}/>
        <button type="button" className={`btn btn-${theme === 'light' ? 'dark' : 'light'} position-fixed bottom-0 end-0 m-4 rounded-circle`} id='backToTopBtn' onClick={backTotop}>
          <i className="bi bi-arrow-up-circle fs-3"></i>
        </button>
      </Router>
    </div>
  )
}
