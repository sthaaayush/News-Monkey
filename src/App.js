import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './Components/SidePanel';

export default function App() {
  //Initial API
  const [apiUrl, setApiUrl] = useState('https://newsapi.org/v2/everything?q=all&apiKey=e94d7e00913f4d4b93934d70da67c725');
  const [articles, setArticles] = useState([]);
  const [theme, setTheme] = useState('light');
  const [themeIcon, setThemeIcon] = useState('brightness-high');

  //Search function
  const searchNews = (urlVal) => {
    urlVal && setApiUrl(`https://newsapi.org/v2/everything?q=${urlVal.toLowerCase()}&apiKey=e94d7e00913f4d4b93934d70da67c725`);
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
    let response = await fetch(apiUrl);
    let jsonVal = await response.json();
    setArticles(jsonVal.articles || []);
  }

  //Initially call API wit all Query
  useEffect(() => {
    newsResponse();
  }, []);

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
  const backTotop  =() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Router>
        <Navbar searchNews={searchNews} changeTheme={changeTheme} themeIcon={themeIcon} theme={theme} />
        <Routes>
          <Route exact path="/" element={
            <NewsComponent BASE_URL={apiUrl} articles={articles} theme={theme} />
          }></Route>

          <Route exact path="/about" element={
            <About theme={theme} />
          }></Route>
        </Routes>
        <SidePanel />
        <button type="button" class="btn btn-light position-fixed bottom-0 end-0 m-4 rounded-circle" id='backToTopBtn' onClick={backTotop}>
          <i class="bi bi-arrow-up-circle fs-3"></i>
        </button>
      </Router>
    </div>
  )
}
