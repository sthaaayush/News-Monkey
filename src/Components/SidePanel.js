import React from 'react'
import newsMonkeyDark from '../Assets/newsMonkey-dark.png';
import newsMonkeyLight from '../Assets/newsMonkey-light.png';
export default function SidePanel({theme}) {
    return (
        <div>

            <div className={`offcanvas offcanvas-start bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <img src={(theme === 'light') ? newsMonkeyDark : newsMonkeyLight} alt="newsMonkey-logo" style={{height: '2em', width: '2em'}} className='mx-1 mb-2'/>
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">NewsMonkey</h5>
                    <button type="button" className={`btn-close bg-${(theme === 'light') ? 'dark' : 'light'}`} data-bs-dismiss="offcanvas" aria-label="Open"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    )
}
