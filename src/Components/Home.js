import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ theme }) {
    const textColor = theme === 'light' ? 'dark' : 'light';

    return (
        <div className={`container-fluid bg-${theme} text-${textColor} py-5`} style={{ minHeight: '100vh' }}>
            <div className="container text-center">
                <h1 className="display-4 fw-bold mb-4">Welcome to NewsMonkey</h1>
                <p className="lead mb-5">
                    Your one-stop destination for the latest and most relevant news from around the world.
                    Search by keyword, explore categories, and stay updated — all in one place.
                </p>

                <div className="row justify-content-center mb-5">
                    <div className="col-md-8">
                        <img
                            src={(theme === 'light') ? require('../Assets/newsMonkey-dark.png') : require('../Assets/newsMonkey-light.png')}
                            alt="NewsMonkey Logo"
                            className="img-fluid"
                            style={{ maxWidth: '150px' }}
                        />
                    </div>
                </div>

                <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush text-start">
                            <li className={`list-group-item bg-${theme} text-${textColor}`}>🔍 Real-time Search</li>
                            <li className={`list-group-item bg-${theme} text-${textColor}`}>📰 Category-based Filtering</li>
                            <li className={`list-group-item bg-${theme} text-${textColor}`}>🌗 Dark & Light Theme Support</li>
                            <li className={`list-group-item bg-${theme} text-${textColor}`}>📄 Pagination & Smooth Navigation</li>
                        </ul>
                    </div>
                </div>

                <Link to="/newsFeed" className={`btn btn-${textColor} border border-${textColor}`}>
                    Start Reading
                </Link>
            </div>
        </div>
    );
}
