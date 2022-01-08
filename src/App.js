import './assets/boxicons/css/boxicons.min.css'


import './App.scss'
import React from 'react'

import { BrowserRouter, Link } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HeroSlide from './components/hero-slide/HeroSlide'
import Section, { SectionBody } from './components/section/Section'

import banner from './assets/img/introduction-bg@3x.png'
import BannerTop from './components/bannertop/BannerTop'

import BestProduct from './components/bestproducts/BestProduct'
import ListProduct from './components/listproduct/ListProduct'
import BrandStory from './components/brandstory/BrandStory'
import HappenIssue from './components/happenissue/HappenIssue'
import WhatHappen from './components/whathappen/WhatHappen'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <HeroSlide />   
            <BannerTop />        
            <main className='main'>
                <BestProduct />
                <ListProduct />
                <BrandStory />
                <HappenIssue />
                <WhatHappen />
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
