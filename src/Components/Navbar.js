import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({ searchNews, changeTheme, themeIcon, theme }) {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <nav className={` navbar navbar-expand-lg bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`}>
                <div className="container-fluid ">
                    <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className={` text-none navbar-brand text-${(theme === 'light') ? 'dark' : 'light'}`} to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link text-${(theme === 'light') ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${(theme === 'light') ? 'dark' : 'light'}`} to="/">NewsFeed</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${(theme === 'light') ? 'dark' : 'light'}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                id="search"
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        searchNews(searchText);
                                    }
                                }}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    searchNews(searchText);
                                }}
                            >
                                Search
                            </button>

                        </form>
                    </div>
                    <i className={`bi bi-${themeIcon}-fill mx-3 fs-4 text-${(theme === 'light') ? 'dark' : 'light'}`} onClick={changeTheme} style={{ cursor: 'pointer' }}></i>
                </div>
            </nav>
        </>
    )
}
