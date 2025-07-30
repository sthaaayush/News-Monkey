import React from 'react'
import { Link } from 'react-router-dom';

export default function NewsItem({ title, imgUrl, desc, articleUrl, pubDate, theme }) {
    const formattedDate = new Date(pubDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
    return (
        <div className={`card col bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} style={{ width: "17.5rem", height: '25rem' }}>
            <img src={imgUrl} className=" img-fluid card-img-top my-1 h-50" alt="news-thumbnail" style={{objectFit: 'contain'}}/>
            <code className={`text-${(theme === 'light') ? 'dark' : 'light'}`}>{formattedDate}</code>
            <div className="card-body d-flex flex-column justify-content-between h-25 overflow-y-hidden">
                <div>
                    <b className="card-title overflow-y-hidden" style={{height: '2em'}}>{title}</b>
                </div>
                <div className="card-text h-25 overflow-x-hidden overflow-y-scroll my-1" style={{
                    overflow: 'scroll',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    height: "5em"
                }}>
                    <p className="card-text">{desc}</p>
                </div>
                <div>
                    <Link to={articleUrl} className="btn btn-primary" target='_blank'>View</Link>
                </div>
            </div>
        </div>
    );
}
