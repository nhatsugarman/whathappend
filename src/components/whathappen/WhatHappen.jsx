import React from 'react'

import './what-happen.scss'

import Section, { SectionTitle, SectionBody } from '../section/Section'

import Button from '../button/Button'

import video from '../../assets/img/video@3x.png'
import error from '../../assets/img/videoObject01@3x.png'
import girl from '../../assets/img/videoObject08@3x.png'
import iconh from '../../assets/img/videoObject03@3x.png'
import iconw from '../../assets/img/videoObject07@3x.png'
import left from '../../assets/img/videoObject04@3x.png'
import click from '../../assets/img/videoObject02@3x.png'
import heart from '../../assets/img/videoObject06@3x.png'
import logoh from '../../assets/img/videoObject05@3x.png'


const WhatHappen = () => {
    return (
        <section className='what-happen'>
            <Section>
                <SectionTitle
                    color='#111'
                    title='What happened'
                    description="How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first"
                >
                    <div className="what-happen__btn">
                        <Button>See more</Button>
                    </div>

                </SectionTitle>
                <div className="what-happen__content">
                    <div className="what-happen__content__video">
                        <img src={girl} alt="IMG" className='what-happen__content__video__girl' />
                        <img src={video} alt="IMG" className='what-happen__content__video__main' />

                        <img src={iconh} alt="IMG" className='what-happen__content__video__iconh' />
                        <img src={error} alt="IMG" className='what-happen__content__video__error' />
                        <img src={left} alt="IMG" className='what-happen__content__video__left' />
                        <img src={click} alt="IMG" className='what-happen__content__video__click' />
                        <img src={heart} alt="IMG" className='what-happen__content__video__heart' />
                        <img src={iconw} alt="IMG" className='what-happen__content__video__iconw' />
                        <img src={logoh} alt="IMG" className='what-happen__content__video__logoh' />

                    </div>
                </div>



            </Section>

        </section>
    )
}

export default WhatHappen
