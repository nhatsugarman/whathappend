import React from 'react'

import './brand-story.scss'

import Section, { SectionTitle } from '../section/Section'

import collaboration from '../../assets/img/img@3x.png'
import pages from '../../assets/img/object01@3x.png'
import books from '../../assets/img/object06@3x.png'
import book from '../../assets/img/object07@3x.png'
import object5 from '../../assets/img/object05@3x.png'
import object4 from '../../assets/img/object04@3x.png'

import Button from '../button/Button'

const BrandStory = () => {
    return (
        <section className='brand-story'>
            <Section>
                <SectionTitle
                    color='#fcd32a'
                    title='Brand Story'
                    description="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
                >
                    <img src={pages} alt="IMG" className='brand-story__page'/>
                    <img src={books} alt="IMG" className='brand-story__books'/>
                    <img src={book} alt="IMG" className='brand-story__book'/>
                    <img src={object4} alt="IMG" className='brand-story__object4'/>
                    <img src={object5} alt="IMG" className='brand-story__object5'/>
                    <div className="brand-story__content">
                        <div className="brand-story__content__black"></div>
                        <div className="brand-story__content__main">
                            
                            <div className="brand-story__content__main__left">
                                <img src={collaboration} alt="IMG" />
                            </div>
                            <div className="brand-story__content__main__right">
                                <h3> What Happened’s Brand story</h3>
                                <p> 청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                    봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                    긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                    아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                                </p>
                                <div className="button">
                                    <Button>
                                        See more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </SectionTitle>
            </Section>
        </section>
    )
}

export default BrandStory
