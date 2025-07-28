import React from 'react';

export default function About({ theme }) {
    return (
        <div className={`card my-3 bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} style={{ maxWidth: '40rem', margin: 'auto' }}>
            <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <p className="card-text">
                    Welcome to our news app! We bring you the latest and most relevant articles from trusted sources.
                    Whether you're into sports, politics, or technology, we've got something for you.
                </p>
                <p className="card-text">
                    Built with React and styled using Bootstrap, this app supports both light and dark modes for your convenience.
                </p>
            </div>
        </div>
    );
}
