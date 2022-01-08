import React from 'react'

import './best-product.scss'

import '../../scss/_variables.scss';

import image1 from '../../assets/img/bestImage01@3x.png'
import image2 from '../../assets/img/best-image-02@3x.png'
import image3 from '../../assets/img/best-image-03@3x.png'
import number1 from '../../assets/img/producticon-01@3x.png'
import number2 from '../../assets/img/producticon-02@3x.png'
import number3 from '../../assets/img/producticon-03@3x.png'
import go from '../../assets/img/go-icon@3x.png'



import background from '../../assets/img/besBg@3x.png'

import Section, { SectionTitle, SectionBody } from '../section/Section'

const BestProduct = () => {
    return (
        <Section
            background={background}
        >

            <SectionTitle
                color='#f96400'
                title='Best Product'
                description="How to create mobile-optimized videos in minutes. Not a designer, 
                every team makes a lot of videos Can be trimmed. Take the first"
            >
                <div className="best__products__lists">
                    <ProductLists
                        image={image1}
                        number={number1}
                        go={go}
                    />
                    <ProductLists
                        image={image2}
                        number={number2}
                        go={go}
                    />
                    <ProductLists
                        image={image3}
                        number={number3}
                        go={go}
                    />

                </div>
            </SectionTitle>


        </Section>
    )
}

export default BestProduct

const ProductLists = props => {
    return (

        <div className="best__products__item">
            <img src={props.image} alt="IMG" className='best__products__item__img' />
            <img src={props.number} alt="IMG" className='best__products__item__number' />
            <div className="best__products__item__box">
                <h4> How to create mobile-optimized</h4>
                <img src={props.go} alt="IMG" />
            </div>
        </div>
    )
}

