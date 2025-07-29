import NewsItem from './NewsItem'

export default function NewsComponent({ articles, theme, articlesData, pageNumber, innerPageHandler }) {
    
    return (
        <>
            <div className=" d-flex ">
                {/* News Section */}
                <div className='mx-4 my-2 w-75'>
                    <code className='text-dark fs-5'>{articles.length} news fetched yet.</code>
                    <div className='float-end border border-black border-1 rounded'>
                        <i className={`bi bi-caret-left-fill`} style={{ cursor: 'pointer' }} onClick={() => { innerPageHandler("decrease") }}></i>
                        <b className="mx-2" style={{ cursor: 'default' }} id='innerPageNumber'>{pageNumber}</b>
                        <i className={`bi bi-caret-right-fill`} style={{ cursor: 'pointer' }} onClick={() => { innerPageHandler("increase") }}></i>
                    </div>
                    <div className=' row row-cols-3 my-3 ' style={{ gap: '2em' }}>
                        {(!articlesData || articlesData.length === 0) && <b>No news fetched yet.</b>}
                        {articlesData?.map((articleItem, index) => {
                            return <NewsItem
                                key={articleItem.url}
                                articleUrl={articleItem.url}
                                title={articleItem.title}
                                imgUrl={articleItem.urlToImage}
                                desc={articleItem.description}
                                pubDate={articleItem.publishedAt}
                                theme={theme}
                            />
                        })}
                    </div>
                </div>
                {/* Side Panel News Section */}
                <div className='mx-2 my-2 float-start'>
                    <div className={`card col bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} style={{ width: "17.5rem", height: '82rem' }}>
                        <h3>Advertisement space</h3>
                        <div className={`card-body border border-${(theme === 'light') ? 'dark' : 'light'} rounded m-1 h-50`}>
                            <div>
                                <b className="card-title">Advertisement 1</b>
                            </div>
                            <div className="card-text h-50 overflow-x-hidden overflow-y-hidden my-1" >
                                <p className="card-text">desc</p>
                            </div>
                        </div>
                        <div className={`card-body border border-${(theme === 'light') ? 'dark' : 'light'} rounded m-1 h-50`}>
                            <div>
                                <b className="card-title">Advertisement 1</b>
                            </div>
                            <div className="card-text h-50 overflow-x-hidden overflow-y-hidden my-1" >
                                <p className="card-text">desc</p>
                            </div>
                        </div>
                        <div className={`card-body border border-${(theme === 'light') ? 'dark' : 'light'} rounded m-1 h-50`}>
                            <div>
                                <b className="card-title">Advertisement 1</b>
                            </div>
                            <div className="card-text h-50 overflow-x-hidden overflow-y-hidden my-1" >
                                <p className="card-text">desc</p>
                            </div>
                        </div>
                        <div className={`card-body border border-${(theme === 'light') ? 'dark' : 'light'} rounded m-1 h-50`}>
                            <div>
                                <b className="card-title">Advertisement 1</b>
                            </div>
                            <div className="card-text h-50 overflow-x-hidden overflow-y-hidden my-1" >
                                <p className="card-text">desc</p>
                            </div>
                        </div>
                        <div className={`card-body border border-${(theme === 'light') ? 'dark' : 'light'} rounded m-1 h-50`}>
                            <div>
                                <b className="card-title">Advertisement 1</b>
                            </div>
                            <div className="card-text h-50 overflow-x-hidden overflow-y-hidden my-1" >
                                <p className="card-text">desc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
