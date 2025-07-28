import NewsItem from './NewsItem'

export default function NewsComponent({articles, theme}) {
    return (
        <>
            <div className="container">
            <code className='text-dark fs-5'>{articles.length} news fetched yet.</code>
                <div className=' row row-cols-4 my-3' style={{ gap: '5px' }}>
                    {articles.length === 0 && <b>No news fetched yet.</b>}
                    {articles.map((articleItem, index) => {
                        return <NewsItem
                            key={articleItem.url}
                            articleUrl = {articleItem.url}
                            title={articleItem.title}
                            imgUrl={articleItem.urlToImage}
                            desc={articleItem.description}
                            pubDate = {articleItem.publishedAt}
                            theme = {theme}
                        />
                    })}
                </div>
            </div>
        </>
    )
}
