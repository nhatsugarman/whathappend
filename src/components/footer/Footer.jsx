import React from 'react'

import logo from '../../assets/img/logo.svg'

import icon1 from '../../assets/img/snsicon-01.svg'
import icon2 from '../../assets/img/snsicon-02.svg'
import icon3 from '../../assets/img/snsicon-03.svg'

import { Link } from 'react-router-dom'

import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__content">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">
                            What happened
                        </Link>
                    </div>
                    <ul className="logo__description">
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li>[공지] 29CM 강남 스토어 영업 종료</li>
                        <li> [공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li> [공지] iOS 10 이하 버전 지원 중단 안내</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                    </ul>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <h3>about us</h3>
                        <Link to="/">회사 소개</Link>
                        <Link to="/">인재 채용</Link>
                        <Link to="/">상시 할인 혜택</Link>
                    </div>
                    <div className="footer__content__menu">
                        <h3>my order</h3>
                        <Link to="/">내 주문</Link>
                        <Link to="/">주문 배송</Link>
                        <Link to="/">취소 / 교환 / 반품 내역</Link>
                        <Link to="/">상품 리뷰 내역</Link>
                        <Link to="/">증빙 서류 발급</Link>
                    </div>
                    <div className="footer__content__menu">
                        <h3>my account</h3>
                        <Link to="/">    회원 정보 수정</Link>
                        <Link to="/">회원 등급</Link>
                        <Link to="/">마일리지 현황</Link>
                        <Link to="/">쿠폰</Link>
                    </div>
                    <div className="footer__content__menu">
                        <h3>help</h3>
                        <Link to="/">1 : 1 상담 내역</Link>
                        <Link to="/">상품 Q & A 내역</Link>
                        <Link to="/">공지 사항</Link>
                        <Link to="/">자주하는 질문</Link>
                        <Link to="/">고객의 소리</Link>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <ul className="footer__bottom__lists">
                    <li className='footer__bottom__item'>
                        <Link to="/">© 2020-2021 what happened corp</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">(주) 왓헤픈</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">대표자 : 홍길동</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">사업자 등록번호 : 356-00-00000</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">test0101@what happened.co.kr</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">서울특별시 강남구 도산대로 8길 17</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">FAX : 070-0000-0000</Link>
                    </li>
                    <li className='footer__bottom__item'>
                        <Link to="/">서비스 이용약관  l  개인정보처리방침</Link>
                    </li>
                </ul>
                <div className="footer__bottom__links">
                    <Link to="/">
                        <img src={icon1} alt="IMG" />
                        <img src={icon2} alt="IMG" />
                        <img src={icon3} alt="IMG" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
