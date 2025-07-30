import NewsItem from './NewsItem'

export default function NewsComponent({ articles, theme, articlesData, pageNumber, innerPageHandler }) {

    //Dummy data f0r ads
    const ads = [
        "Fast SSDs Inside!",
        "AI Tools, Smarter Work!",
        "Ultra HD, Ultra Clear!",
        "Automate Everything!"
    ];

    return (
        <>
            <div className="d-flex flex-column flex-md-row">
                {/* News Section */}
                <div className='mx-2 my-2 '>
                    <code className='text-dark fs-5'>{articles.length} news fetched yet.</code>
                    <div className='float-end border border-black border-1 rounded'>
                        <i className={`bi bi-caret-left-fill`} style={{ cursor: 'pointer' }} onClick={() => { innerPageHandler("decrease") }}></i>
                        <b className="mx-2" style={{ cursor: 'default' }} id='innerPageNumber'>{pageNumber}</b>
                        <i className={`bi bi-caret-right-fill`} style={{ cursor: 'pointer' }} onClick={() => { innerPageHandler("increase") }}></i>
                    </div>
                    <div className='row row-cols-1 row-cols-md-3 my-3 d-flex justify-content-around' style={{ gap: '2em' }}>
                        {(!articlesData || articlesData.length === 0) && <b>No news fetched yet.</b>}
                        {articlesData?.map((articleItem, index) => (
                            <NewsItem
                                key={articleItem.url}
                                articleUrl={articleItem.url}
                                title={articleItem.title}
                                imgUrl={articleItem.urlToImage}
                                desc={articleItem.description}
                                pubDate={articleItem.publishedAt}
                                theme={theme}
                            />
                        ))}
                    </div>
                </div>

                {/* Side Panel for Desktop */}
                <div className='mx-2 my-2 d-none d-md-block'>
                    <div className={`card bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`} style={{ width: "18rem", height: '83rem' }}>
                        <h3>Advertisement space</h3>
                        {ads.map((headline, index) => (
                            <div key={index} className={`card-body border border-${theme === 'light' ? 'dark' : 'light'} rounded m-1`} style={{ height: "20em" }}>
                                <img src="https://picsum.photos/200/300" className="card-img-top my-1" alt={`ad-${index}`} style={{ height: "10em", objectFit: 'cover' }} />
                                <div><b className="card-title">{headline}</b></div>
                                <div className="card-text overflow-x-hidden overflow-y-hidden my-1">
                                    <p className="card-text fs-9 lh-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nostrum quasi, non beatae dolorum quaerat reprehenderit impedit.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Side Panel (Collapsible for Mobile) */}
                <div className='accordion d-md-none mx-2 my-2' id="mobileAdsAccordion">
                    <div className={`accordion-item bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
                        <h2 className="accordion-header" id="headingAds">
                            <button className={`accordion-button bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseAds" aria-expanded="false" aria-controls="collapseAds">
                                Advertisement Space
                            </button>
                        </h2>
                        <div id="collapseAds" className="accordion-collapse collapse" aria-labelledby="headingAds" data-bs-parent="#mobileAdsAccordion">
                            <div className="accordion-body">
                                {ads.map((headline, index) => (
                                    <div key={index} className={`card-body border border-${theme === 'light' ? 'dark' : 'light'} rounded m-1`} style={{ height: "20em" }}>
                                        <img src="https://picsum.photos/200/300" className="card-img-top my-1" alt={`ad-${index}`} style={{ height: "10em", objectFit: 'cover' }} />
                                        <div><b className="card-title">{headline}</b></div>
                                        <div className="card-text overflow-x-hidden overflow-y-hidden my-1">
                                            <p className="card-text fs-9 lh-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum quasi, non beatae dolorum quaerat reprehenderit impedit.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
