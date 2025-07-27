import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function NewsComponent() {
    const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e94d7e00913f4d4b93934d70da67c725';
    const [articles, setArticles] = useState([]);

    const newsResponse = async () => {
        let response = await fetch(BASE_URL);
        let jsonVal = await response.json();
        setArticles(jsonVal.articles || []);
    }

    useEffect(() => {
        newsResponse();
    }, []);
    return (
        <>
            <div className="container">
                <div className='container row row-cols-4 my-3' style={{gap: '1em'}}>
                    {articles.length === 0 && <b>No news fetched yet.</b>}
                    {articles.map((articleItem) => {
                        return <NewsItem />
                    })}
                </div>
            </div>
        </>
    )
}
