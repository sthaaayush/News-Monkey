import React from 'react'

export default function NewsItem() {
    return (
        <>
            <div className="card col" style={{ width: "19rem", height: '25rem' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" className="card-img-top" alt="" />
                <div className="card-body d-flex flex-column justify-content-between h-25">
                    <div>
                        <b className="card-title">Some quick example text to build on the card title and make up the bulk of the card’s content.</b>
                    </div>
                    {/* <div className='h-50 overflow-x-hidden overflow-y-scroll' style={{
                            overflow: 'scroll',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div> */}
                    <div>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}
