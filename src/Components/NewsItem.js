import React from 'react'

export default function NewsItem({ title, imgUrl, desc, articleUrl, pubDate, theme }) {
    const formattedDate = new Date(pubDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
    return (
        <div className={`card col bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} style={{ width: "19rem", height: '25rem' }}>
            <img src={imgUrl} className="card-img-top my-1 h-50" alt="news-thumbnail" />
            <code className={`text-${(theme === 'light') ? 'dark' : 'light'}`}>{formattedDate}</code>
            <div className="card-body d-flex flex-column justify-content-between h-50">
                <div>
                    <b className="card-title">{title}</b>
                </div>
                <div className="card-text h-50 overflow-x-hidden overflow-y-scroll my-1" style={{
                    overflow: 'scroll',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    <p className="card-text">{desc}</p>
                </div>
                <div>
                    <a href={articleUrl} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
