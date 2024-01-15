import React from "react";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="nov-footer">
            <div className="footer-layout pt-85 pb-80 pb-xs-40">
                <div className="container">
                    <div className="row">
                        <div className="footer_contact block_footer col-xl-4 col-lg-4 col-md-8 col-sm-12">
                            <div className="logo-footer">
                                <Image
                                    className='img-fluid'
                                    src='/images/logo-home2.png'
                                    alt='FreshMate Password : 1'
                                    width="134"
                                    height="30"
                                    loading="lazy">
                                </Image>
                            </div>
                            <div className="summary-footer">
                                <p></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet</p><p></p>
                            </div>
                        </div>
                        <div className="footer_menu block_footer mt-xs-0 mb-xs-0 col-xl-2 col-lg-2 col-md-2 col-sm-6 mt-xs-20 mt-sm-20">
                            <div className="block h-100">
                                <div className="title-block">
                                    HELP
                                    <span className="f_btn_sl d-sm-none"><i className="zmdi zmdi-plus"></i></span>
                                </div>
                                <div className="block-content h_t">
                                    <ul className="site-footer__linklist list-unstyled pb-xs-30">
                                        <li className="site-footer__linklist-item">
                                            <a href="#">Help Center</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="#">Shipping Info</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="#">Returns</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="#">How To Order</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="#">How To Track</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="#">Size Guide</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_menu block_footer mt-xs-0 mb-xs-0 col-xl-2 col-lg-2 col-md-2 col-sm-6 mt-sm-20">
                            <div className="block h-100">
                                <div className="title-block">
                                    COMPANY
                                    <span className="f_btn_sl d-sm-none"><i className="zmdi zmdi-plus"></i></span>
                                </div>
                                <div className="block-content h_t">
                                    <ul className="site-footer__linklist list-unstyled pb-xs-30">
                                        <li className="site-footer__linklist-item">
                                            <a href="/pages/about-us">About Us</a>
                                        </li>
                                        <li className="site-footer__linklist-item">
                                            <a href="/blogs/basic-knowledge">Our Blog</a>
                                        </li>

                                        <li className="site-footer__linklist-item">
                                            <a href="/pages/faqs">Careers</a>
                                        </li>

                                        <li className="site-footer__linklist-item">
                                            <a href="/pages/store-locations-page">Store Locations</a>
                                        </li>

                                        <li className="site-footer__linklist-item">
                                            <a href="/pages/testimonials-page">Testimonial</a>
                                        </li>

                                        <li className="site-footer__linklist-item">
                                            <a href="/pages/faqs">Sitemap</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_newsletter block_footer block-4 mt-xs-0 mb-xs-0 col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-50">
                            <div className="block h-100">

                                <div className="title-block">
                                    NEWSLETTER

                                    <span className="f_btn_sl d-sm-none"><i className="zmdi zmdi-plus"></i></span>

                                </div>

                                <div className="block-content h_t">
                                    <div className="pb-xs-30">

                                        <div className="footer-subtitle mb-3"><p>Get 15% off your first purchaxse! Plus, be the first to know about sales new product launches and exclusive offers!</p></div>

                                        <form method="post" action="/contact#footer_contact" id="footer_contact" accept-charset="UTF-8" className="contact-form">
                                            <input type="hidden" name="form_type" value="customer" />
                                            <input type="hidden" name="utf8" value="✓" />
                                            <div className="input-group">
                                                <input type="hidden" name="contact[tags]" value="newsletter" />
                                                <input type="email" name="contact[email]" id="Email_Footer" className="input-group__field newsletter__input form-control" value="" placeholder="Your Email Address" />
                                                <button type="submit" className="btn newsletter__submit" name="commit">
                                                    <i className="zmdi zmdi-long-arrow-right"></i>
                                                </button>
                                            </div>

                                        </form>
                                        <div className="mt-30"><div className="block_social">
                                            <ul className="list-inline mb-0">

                                                <li className="list-inline-item">
                                                    <a href="#" title="FreshMate Password : 1 on Facebook">
                                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                                        <span className="social-title">Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" title="FreshMate Password : 1 on Pinterest">
                                                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                                        <span className="social-title">Pinterest</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" title="FreshMate Password : 1 on Instagram">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                        <span className="social-title">Instagram</span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" title="FreshMate Password : 1 on Twitter">
                                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                                        <span className="social-title">Twitter</span>
                                                    </a>
                                                </li>

                                                <li className="list-inline-item">
                                                    <a href="#" title="FreshMate Password : 1 on Tiktok">
                                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path></svg>
                                                        <span className="social-title">Tiktok</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright pt-20 pb-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="copyright text-lg-left text-center">©2024 FRESH-FRUITS THEME</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;