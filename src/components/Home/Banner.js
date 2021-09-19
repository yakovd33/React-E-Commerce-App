import React from 'react'

function Banner({ image, text, linkText, link }) {
    return (
        <section className="banner-section" style={{ background: `url(${image})` }}>
            <div className="container">
                <div className="container-content" class="banner-content">
                    <div className="banner-left">
                        <div className="banner-text">
                            { text }
                        </div>
                    </div>

                    <div className="banner-right">
                        <a href={ link } className="banner-link">{ linkText }</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
