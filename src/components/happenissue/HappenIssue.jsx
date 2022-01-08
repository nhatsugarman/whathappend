import React from 'react'

import './happen-issue.scss'

import Section, { SectionTitle } from '../section/Section'

import Button from '../button/Button'

import dice1 from '../../assets/img/newsObject02@3x.png'
import dice2 from '../../assets/img/newsObject03@3x.png'
import arrow from '../../assets/img/newsImg01@3x.png'
import icon from '../../assets/img/newsObject03@2x.png'
import hot from '../../assets/img/newsObject04@2x.png'

const HappenIssue = () => {
    return (
        <section className='happen-isue'>
            <Section>
                <SectionTitle
                    color='#110e03'
                    title='Happened’s issue'
                    description=" 모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
                >
                    <div className="happen-isue__btn">
                        <Button>See more</Button>
                    </div>
                </SectionTitle>
            </Section>
            <img src={dice1} alt="IMG" className='happen-isue__dice1' />
            <img src={dice2} alt="IMG" className='happen-isue__dice2' />
            <div className="happen-isue__content">
                <div className="happen-isue__content__left">
                    <h2>Whpn issue</h2>
                    <img src={arrow} alt="" className='happen-isue__content__left__arrow' />
                    <img src={icon} alt="" className='happen-isue__content__left__icon' />

                </div>
                <div className="happen-isue__content__right">
                    <div className="happen-isue__content__right__lists">
                        <div className="happen-isue__content__right__item">
                            <img src={hot} alt="" className='hot'/>
                            <h3 className="happen-isue__content__right__item__tittle">
                                b brand
                            </h3>
                            <div className="happen-isue__content__right__item__img"></div>
                        </div>
                        <div className="happen-isue__content__right__item">
                           
                            <h3 className="happen-isue__content__right__item__tittle">
                                B brand
                            </h3>
                            <div className="happen-isue__content__right__item__img"></div>
                        </div>
                        <div className="happen-isue__content__right__item">
                            <h3 className="happen-isue__content__right__item__tittle">
                                b brand
                            </h3>
                            <div className="happen-isue__content__right__item__img"></div>
                        </div>
                        <div className="happen-isue__content__right__item">
                            <h3 className="happen-isue__content__right__item__tittle">
                                b brand
                            </h3>
                            <div className="happen-isue__content__right__item__img"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HappenIssue
