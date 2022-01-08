import React from 'react'

import { Link } from 'react-router-dom'

import './banner-top.scss'

import banner from '../../assets/img/introduction-bg@3x.png'

const BannerTop = () => {
    return (
        <section className="banner">
            <Link to="/banner">
                <img src={banner} alt="" />
            </Link>
            <div className="banner__content">
                <h3>What Happened!</h3>
                <p>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.</p>
            </div>
        </section>
    )
}

export default BannerTop
