import React from 'react'
import newsMonkeyDark from '../Assets/newsMonkey-dark.png';
import newsMonkeyLight from '../Assets/newsMonkey-light.png';
import { Link } from 'react-router-dom';
export default function SidePanel({ theme, categoryNews }) {
    const categoriesList = [
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology'
    ]
    return (
        <div>

            <div className={`offcanvas offcanvas-start bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <img src={(theme === 'light') ? newsMonkeyDark : newsMonkeyLight} alt="newsMonkey-logo" style={{ height: '2em', width: '2em' }} className='mx-2' />
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">NewsMonkey</h5>
                    <button type="button" className={`btn-close bg-${(theme === 'light') ? 'dark' : 'light'}`} data-bs-dismiss="offcanvas" aria-label="Open"></button>
                </div>
                <div className="offcanvas-body">
                    {/* Category Dropdown */}
                    <div className="dropdown">
                        <button className={`btn text-${(theme === 'light') ? 'dark' : 'light'} dropdown-toggle w-100 text-start rounded-0`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-${theme} w-100 text-start rounded-0`}>
                            {
                                categoriesList.map((category, index) => (
                                    <li key={index}>
                                        <Link className="dropdown-item" role="button" onClick={() => {categoryNews(category)}}>{category}</Link>
                                        {index !== categoriesList.length - 1 && (
                                            <hr className="dropdown-divider" />
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
