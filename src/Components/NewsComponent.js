import NewsItem from './NewsItem'

export default function NewsComponent({articles}) {
    return (
        <>
            <div className="container">
                <div className='container row row-cols-4 my-3' style={{ gap: '1em' }}>
                    {articles.length === 0 && <b>No news fetched yet.</b>}
                    {articles.map((articleItem, index) => {
                        return <NewsItem
                            key={articleItem.url}
                            title={articleItem.title}
                            imgUrl={articleItem.urlToImage}
                            desc={articleItem.description}
                        />
                    })}
                </div>
            </div>
        </>
    )
}
