import React from 'react'

import './section.scss'

import '../../scss/_variables.scss'

const Section = props => {
    return (
        <section className='section' style={{backgroundImage: `url(${props.background})`}}>
            {props.children}
        </section>
    )
}
export const SectionTitle = props => {
    return (
        <div className='section__title' style={{color: `${props.color}`}}>
            <h3 className='section__title__h3'>{props.title}</h3>
            <p className='section__title__p'>{props.description}</p>
            {props.children}
        </div>
    )
}
export const SectionBody = props => {
    return (
        <div className='section__body'>
            {props.children}
        </div>
    )
}
export default Section
