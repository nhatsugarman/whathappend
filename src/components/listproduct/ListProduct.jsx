import React from 'react'

import './list-product.scss'

import products from '../../assets/fake-data/products'

import Button from '../button/Button'

const ListProduct = () => {
    return (
        <section className='list-products'>
            {
                products.map((item, index) => (
                    <div className="product-item" key={index}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <div className="product-item__bottom">
                            <span className='product-item__bottom__price'>
                                {item.price}
                            </span>
                            <p className='product-item__bottom__heart'>
                                <i className='bx bxs-heart'></i>
                                {item.heart}
                            </p>
                        </div>
                    </div>
                ))
            }
            <div className="btns">
                <Button>
                    See more
                </Button>
            </div>
        </section>
    )
}

export default ListProduct
