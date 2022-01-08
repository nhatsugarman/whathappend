import React, { useRef } from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'
import './header.scss'

const mainNav = [
    {
        display: "Introduction",
        path: "/"
    },
    {
        display: "Solution",
        path: "/solution"
    },
    {
        display: "Rate plan",
        path: "/rate-plan"
    }
]

const Header = () => {

    const menu = useRef(null)

    const menuToggle = () => menu.current.classList.toggle('active')


    return (
        <header className='header'>
            <div className="header-container">
                {/* Header left */}
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                {/* Main header */}
                <div className="header__menu">
                    
                    <ul className="header__menu-lists" ref={menu}>
                        {
                            mainNav.map((item, index) => (
                                <li key={index} onClick={menuToggle}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="header__menu-left" >
                        <Link to="/" className='header__menu-left-login'>
                            Log In
                        </Link>
                        <Link to="/" className='header__menu-left-login'>
                            Apply for free use
                        </Link>
                    </div>

                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-right'></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
