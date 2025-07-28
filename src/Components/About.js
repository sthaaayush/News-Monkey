import React from 'react';

export default function About({ theme }) {
    return (
        <div className={`card my-3 bg-${theme} text-${(theme === 'light') ? 'dark' : 'light'}`} style={{ maxWidth: '60rem', margin: 'auto' }}>
            <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <p className="card-text">
                    Welcome to our news app! We bring you the latest and most relevant articles from trusted sources.
                    Whether you're into sports, politics, or technology, we've got something for you.
                </p>
                <p className="card-text">
                    Built with React and styled using Bootstrap, this app supports both light and dark modes for your convenience.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ad voluptates odio ex fugit necessitatibus, voluptatem dolores, vel dolore voluptatum, aliquam consequuntur in at facilis similique tempore doloremque doloribus delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus molestiae dolores eaque autem illum accusantium, id nam et? Inventore enim voluptate saepe distinctio, adipisci recusandae magnam mollitia. Fugit, labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores hic ullam sit fugiat quaerat nulla possimus accusantium sint itaque. Quos quasi ipsa, esse incidunt vero sequi sit consequatur accusamus?
                </p>
            </div>
        </div>
    );
}
