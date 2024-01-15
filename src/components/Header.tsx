"use client";
import React from "react";
import Image from 'next/image'
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className='site-header sticky-header'>
            <div className='header-top d-none d-md-block'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xl-2 col-lg-3 col-md-4 d-flex justify-content-start align-items-center'>
                            <div className='site-nav--btn d-flex d-xl-none hover:c_df'>
                                <i className='zmdi zmdi-menu'></i>
                            </div>
                            <div className='contentsticky_logo'>
                                <a href='/' className='site-header__logo d-block' style={{ maxWidth: '134px' }}>
                                    <Image
                                        className='img-fluid'
                                        src='/images/logo-home2.png'
                                        alt='FreshMate Password : 1'
                                        width="134"
                                        height="30"
                                        loading="lazy">
                                    </Image>
                                </a>
                            </div>

                        </div>
                        <div className='header-contact align-items-center col-xl-4 col-lg-4 d-none d-lg-flex'>

                        </div>
                        <div className="header-top-right col-xl-6 col-lg-5 col-md-8 d-flex align-items-center justify-content-end">
                            <div className='item-contact align-items-center d-flex'>
                                <div className='icon-phone d-flex align-items-center justify-content-center'>
                                    <a className="d-flex" href="tel:0123-456-7890">
                                        <i className="rbb-icon-phone-4"></i>
                                    </a>
                                </div>
                                <div className="d-flex flex-wrap align-items-start flex-column justify-content-center font-text">
                                    <p className="how-order">How to Order?</p>
                                    <p className="mb-0 text-uppercase"><span>Call Us :0123-456-7890</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-center header-search__parent d-none d-md-block position-relative" style={{ height: '70px' }}>
                <div className="container">
                    <div className="row content-header-center">
                        <div className="col-xl-8 col-6 d-flex align-items-center content-header-center-left content-header-center-right">
                            <div className="header-vertical-menu position-relative">
                                <a href="#" className="btn-vertical text-uppercase d-flex align-items-center justify-content-center" onClick={() => setShowMenu(!showMenu)}>
                                    <i className="rbb-icon-menu-10"></i>
                                    <span>Categories</span>
                                </a>
                                <ul id="desktopVerticalMenu" className="site-nav-vertical" style={{ display: showMenu ? 'block' : 'none' }}>
                                    <li className="nav--lv1 site-nav--Default">
                                        <a href="/bluberry" className="site-nav__link--main">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-1.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid">
                                                </Image>
                                            </div>
                                            BLUBERRY
                                        </a>

                                    </li>
                                    <li className="nav--lv1 site-nav--Default">
                                        <a href="/raspbury" className="site-nav__link--main">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-2.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid">
                                                </Image>
                                            </div>
                                            RASPBURY
                                        </a>

                                    </li>
                                    <li className="nav--lv1 site-nav--Default">
                                        <a href="/blackberry" className="site-nav__link--main">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-3.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid">

                                                </Image>
                                            </div>
                                            BLACKBERRY
                                        </a>

                                    </li>
                                    <li className="nav--lv1 ">
                                        <a href="/strawberry" className="site-nav__link--main" title="Salmon">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-4.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid"></Image>
                                            </div>
                                            STRAWBERRY
                                        </a>
                                    </li>
                                    <li className="nav--lv1 ">
                                        <a href="/toutberry" className="site-nav__link--main" title="Bee Product">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-5.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid" />
                                            </div>
                                            TOUTBERRY
                                        </a>
                                    </li>
                                    <li className="nav--lv1 ">
                                        <a href="/redcurrant" className="site-nav__link--main" title="Coffee Beans">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-6.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid" />
                                            </div>
                                            RED CURRANT
                                        </a>
                                    </li>
                                    <li className="nav--lv1 ">
                                        <a href="/luquat" className="site-nav__link--main" title="Burger">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-7.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid" />
                                            </div>
                                            LUQUAT
                                        </a>
                                    </li>
                                    <li className="nav--lv1">
                                        <a href="/chermoya" className="site-nav__link--main" title="Pizza">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-8.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid" />
                                            </div>
                                            CHERMOYA
                                        </a>
                                    </li>
                                    <li className="nav--lv1">
                                        <a href="/cherries" className="site-nav__link--main" title="Pizza">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-8.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid" />
                                            </div>
                                            CHERRIES
                                        </a>
                                    </li>

                                    <li className="nav--lv1 last parent--lv1 site-nav--Default">
                                        <a href="/contact" className="site-nav__link--main">
                                            <div className="site-nav--icon">
                                                <Image
                                                    src="/images/icon-cart-2.png?v=1688369656&amp;width=35"
                                                    alt="icon-ver"
                                                    width="35"
                                                    height="35"
                                                    loading="lazy"
                                                    className="img-fluid">
                                                </Image>
                                            </div>
                                            <span className="site-nav--title">CONTACT</span>
                                        </a>
                                        <div className="nav-dropdown--lv1 MenuDefault">
                                            <ul>
                                                <li className="nav--lv2">
                                                    <a href="#" className="site-nav__link--second site-nav__link">
                                                        <span>Name</span>
                                                        <span className="site-nav--direc d-none"></span>
                                                    </a>
                                                </li>
                                                <li className="nav--lv2">
                                                    <a href="#" className="site-nav__link--second site-nav__link">
                                                        <span>Company Name</span>
                                                        <span className="site-nav--direc d-none"></span>
                                                    </a>
                                                </li>
                                                <li className="nav--lv2">
                                                    <a href="#" className="site-nav__link--second site-nav__link">
                                                        <span>Email</span>
                                                        <span className="site-nav--direc d-none"></span>
                                                    </a>
                                                </li>
                                                <li className="nav--lv2">
                                                    <a href="#" className="site-nav__link--second site-nav__link">
                                                        <span>Phone</span>
                                                        <span className="site-nav--direc d-none"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="contentsticky_menu d-none d-xl-block"></div>
                        </div>
                        <div className="col-xl-4 col-6 d-flex align-items-center justify-content-end content-header-center-right">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;