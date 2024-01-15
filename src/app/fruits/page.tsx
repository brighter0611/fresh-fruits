import React from "react";
import Image from 'next/image'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Fruits = () => {
    return (
        <>
            <Header />
            <div className='content container pt-80'>
                <div className='container-inner position-relative'>
                    <div className="title_section text-center">
                        <span className="title" style={{ color: '#222222' }}>
                            <p>Fresh Fruits</p>
                        </span>
                    </div>
                    <div className='products-grid grid--view-items row spacing-30 collection-carousel slick-initialized slick-slider'>
                        <div className='slick-list draggable'>
                            <div className='slick-track' style={{ opacity: '1', width: '1650px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '330px' }}>
                                    <div>
                                        <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                            <div>
                                                <div className="item p_item col">

                                                    <div className="item-product" data-product-id="product-8406262186264" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575646445848,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-21&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet corn&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:1400,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1800,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371616506136,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616538904,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616571672,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616604440,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616637208,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;,&quot;width&quot;:1000}]}">
                                                        <div className="inner-top">
                                                            <div className="product-top thumbnail-container has-multiimage">
                                                                <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">

                                                                    <div className="respone_image" style={{ paddingTop: '100.0%' }}>
                                                                        <Image
                                                                            src="/images/berry-1 (1).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                        <Image
                                                                            src="/images/berry-1 (2).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail-second"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                    </div>
                                                                </a>

                                                                {/* <div className="product--badge">

                                      <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-22%</span>

                                    </div>

                                    <div className="button--top">

                                      <div className="productWishList">
                                        <a className="btnProductWishlist item-product__wishlist" data-icon-wishlist="" href="#" data-product-handle="aiamond-halo-stud-barrings" data-id="8406262186264" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to wishlist">
                                          <i className="zmdi zmdi-favorite-outline"></i>
                                        </a>
                                      </div>

                                      <div className="productQuickView d-none d-md-block">
                                        <a className="btnProductQuickview" href="#" data-url="/products/aiamond-halo-stud-barrings?view=quick_view" data-product-url="/products/aiamond-halo-stud-barrings" data-handle="aiamond-halo-stud-barrings" data-pid="45575646445848" data-toggle="tooltip" data-placement="top" title="Quick view">
                                          <i className="zmdi zmdi-collection-image-o"></i>
                                        </a>
                                      </div>

                                    </div> */}

                                                            </div>
                                                            <div className="product__info">
                                                                <div className="product__title">
                                                                    <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                        <span>Sweet corn</span>
                                                                    </a>
                                                                </div>
                                                                <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                <div className="price-box mt-15">
                                                                    <div className="price-sale">
                                                                        <span className="special-price" data-price-grid="">
                                                                            <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                        </span>
                                                                        <span className="old-price" data-compare-price-grid="">
                                                                            <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <ul className="item-swatch list-unstyled">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
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
                                </div>

                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '330px' }}>
                                    <div>
                                        <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                            <div>
                                                <div className="item p_item col">

                                                    <div className="item-product" data-product-id="product-8406262186264" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575646445848,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-21&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet corn&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:1400,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1800,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371616506136,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616538904,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616571672,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616604440,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616637208,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;,&quot;width&quot;:1000}]}">
                                                        <div className="inner-top">
                                                            <div className="product-top thumbnail-container has-multiimage">
                                                                <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">

                                                                    <div className="respone_image" style={{ paddingTop: '100.0%' }}>
                                                                        <Image
                                                                            src="/images/berry-1 (1).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                        <Image
                                                                            src="/images/berry-1 (2).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail-second"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                    </div>
                                                                </a>

                                                                {/* <div className="product--badge">

                                      <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-22%</span>

                                    </div>

                                    <div className="button--top">

                                      <div className="productWishList">
                                        <a className="btnProductWishlist item-product__wishlist" data-icon-wishlist="" href="#" data-product-handle="aiamond-halo-stud-barrings" data-id="8406262186264" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to wishlist">
                                          <i className="zmdi zmdi-favorite-outline"></i>
                                        </a>
                                      </div>

                                      <div className="productQuickView d-none d-md-block">
                                        <a className="btnProductQuickview" href="#" data-url="/products/aiamond-halo-stud-barrings?view=quick_view" data-product-url="/products/aiamond-halo-stud-barrings" data-handle="aiamond-halo-stud-barrings" data-pid="45575646445848" data-toggle="tooltip" data-placement="top" title="Quick view">
                                          <i className="zmdi zmdi-collection-image-o"></i>
                                        </a>
                                      </div>

                                    </div> */}

                                                            </div>
                                                            <div className="product__info">
                                                                <div className="product__title">
                                                                    <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                        <span>Sweet corn</span>
                                                                    </a>
                                                                </div>
                                                                <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                <div className="price-box mt-15">
                                                                    <div className="price-sale">
                                                                        <span className="special-price" data-price-grid="">
                                                                            <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                        </span>
                                                                        <span className="old-price" data-compare-price-grid="">
                                                                            <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <ul className="item-swatch list-unstyled">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
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
                                </div>

                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '330px' }}>
                                    <div>
                                        <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                            <div>
                                                <div className="item p_item col">

                                                    <div className="item-product" data-product-id="product-8406262186264" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575646445848,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-21&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet corn&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:1400,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1800,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371616506136,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616538904,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616571672,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616604440,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616637208,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;,&quot;width&quot;:1000}]}">
                                                        <div className="inner-top">
                                                            <div className="product-top thumbnail-container has-multiimage">
                                                                <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">

                                                                    <div className="respone_image" style={{ paddingTop: '100.0%' }}>
                                                                        <Image
                                                                            src="/images/berry-1 (1).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                        <Image
                                                                            src="/images/berry-1 (2).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail-second"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                    </div>
                                                                </a>

                                                                {/* <div className="product--badge">

                                      <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-22%</span>

                                    </div>

                                    <div className="button--top">

                                      <div className="productWishList">
                                        <a className="btnProductWishlist item-product__wishlist" data-icon-wishlist="" href="#" data-product-handle="aiamond-halo-stud-barrings" data-id="8406262186264" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to wishlist">
                                          <i className="zmdi zmdi-favorite-outline"></i>
                                        </a>
                                      </div>

                                      <div className="productQuickView d-none d-md-block">
                                        <a className="btnProductQuickview" href="#" data-url="/products/aiamond-halo-stud-barrings?view=quick_view" data-product-url="/products/aiamond-halo-stud-barrings" data-handle="aiamond-halo-stud-barrings" data-pid="45575646445848" data-toggle="tooltip" data-placement="top" title="Quick view">
                                          <i className="zmdi zmdi-collection-image-o"></i>
                                        </a>
                                      </div>

                                    </div> */}

                                                            </div>
                                                            <div className="product__info">
                                                                <div className="product__title">
                                                                    <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                        <span>Sweet corn</span>
                                                                    </a>
                                                                </div>
                                                                <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                <div className="price-box mt-15">
                                                                    <div className="price-sale">
                                                                        <span className="special-price" data-price-grid="">
                                                                            <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                        </span>
                                                                        <span className="old-price" data-compare-price-grid="">
                                                                            <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <ul className="item-swatch list-unstyled">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
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
                                </div>

                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '330px' }}>
                                    <div>
                                        <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                            <div>
                                                <div className="item p_item col">

                                                    <div className="item-product" data-product-id="product-8406262186264" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575646445848,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-21&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet corn&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:1400,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1800,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371616506136,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_d697e61b-8f39-41e5-8b52-a7fb0e7becf5.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616538904,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_d285de24-2502-464f-8e66-75f607433ca0.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616571672,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616604440,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_43fe1443-23ce-408a-99f0-8d8dbc4b9d8d.jpg?v=1687762079&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371616637208,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_b596549f-7699-4549-85f3-121ad1fa53ec.jpg?v=1687762079&quot;,&quot;width&quot;:1000}]}">
                                                        <div className="inner-top">
                                                            <div className="product-top thumbnail-container has-multiimage">
                                                                <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">

                                                                    <div className="respone_image" style={{ paddingTop: '100.0%' }}>
                                                                        <Image
                                                                            src="/images/berry-1 (1).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                        <Image
                                                                            src="/images/berry-1 (2).jpg"
                                                                            alt="Sweet corn"
                                                                            width="1000"
                                                                            height="1000"
                                                                            loading="lazy"
                                                                            className="product__thumbnail-second"
                                                                            data-xblocker="passed"
                                                                            style={{ visibility: 'visible' }} />
                                                                    </div>
                                                                </a>

                                                                {/* <div className="product--badge">

                                      <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-22%</span>

                                    </div>

                                    <div className="button--top">

                                      <div className="productWishList">
                                        <a className="btnProductWishlist item-product__wishlist" data-icon-wishlist="" href="#" data-product-handle="aiamond-halo-stud-barrings" data-id="8406262186264" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to wishlist">
                                          <i className="zmdi zmdi-favorite-outline"></i>
                                        </a>
                                      </div>

                                      <div className="productQuickView d-none d-md-block">
                                        <a className="btnProductQuickview" href="#" data-url="/products/aiamond-halo-stud-barrings?view=quick_view" data-product-url="/products/aiamond-halo-stud-barrings" data-handle="aiamond-halo-stud-barrings" data-pid="45575646445848" data-toggle="tooltip" data-placement="top" title="Quick view">
                                          <i className="zmdi zmdi-collection-image-o"></i>
                                        </a>
                                      </div>

                                    </div> */}

                                                            </div>
                                                            <div className="product__info">
                                                                <div className="product__title">
                                                                    <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                        <span>Sweet corn</span>
                                                                    </a>
                                                                </div>
                                                                <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                <div className="price-box mt-15">
                                                                    <div className="price-sale">
                                                                        <span className="special-price" data-price-grid="">
                                                                            <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                        </span>
                                                                        <span className="old-price" data-compare-price-grid="">
                                                                            <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <ul className="item-swatch list-unstyled">
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div>
                                                        <div className="item p_item col">
                                                            <div className="item-product" data-product-id="product-8406267691288" data-json-product="{&quot;variants&quot;: [{&quot;id&quot;:45575671873816,&quot;title&quot;:&quot;Default Title&quot;,&quot;option1&quot;:&quot;Default Title&quot;,&quot;option2&quot;:null,&quot;option3&quot;:null,&quot;sku&quot;:&quot;e-55&quot;,&quot;requires_shipping&quot;:true,&quot;taxable&quot;:true,&quot;featured_image&quot;:null,&quot;available&quot;:true,&quot;name&quot;:&quot;Sweet Chili&quot;,&quot;public_title&quot;:null,&quot;options&quot;:[&quot;Default Title&quot;],&quot;price&quot;:700,&quot;weight&quot;:0,&quot;compare_at_price&quot;:1200,&quot;inventory_management&quot;:&quot;shopify&quot;,&quot;barcode&quot;:&quot;&quot;,&quot;quantity_rule&quot;:{&quot;min&quot;:1,&quot;max&quot;:null,&quot;increment&quot;:1}}],&quot;media&quot;: [{&quot;alt&quot;:null,&quot;id&quot;:34371655270680,&quot;position&quot;:1,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/1_11004a45-56a9-4550-aa94-25edb6f50149.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655303448,&quot;position&quot;:2,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/2_7902993d-80cd-4ab9-a9c0-5a5584faecf2.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655336216,&quot;position&quot;:3,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/3_e2191791-fcf0-4785-9deb-bf40d104bebd.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655368984,&quot;position&quot;:4,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/4_309301f0-1338-4af1-b3c1-8a2b4433c448.jpg?v=1687762333&quot;,&quot;width&quot;:1000},{&quot;alt&quot;:null,&quot;id&quot;:34371655401752,&quot;position&quot;:5,&quot;preview_image&quot;:{&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;width&quot;:1000,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;},&quot;aspect_ratio&quot;:1.0,&quot;height&quot;:1000,&quot;media_type&quot;:&quot;image&quot;,&quot;src&quot;:&quot;\/\/nov-freshmate.myshopify.com\/cdn\/shop\/products\/5_2a81245b-9eb7-4fab-b0f1-71e351926a9e.jpg?v=1687762333&quot;,&quot;width&quot;:1000}]}">
                                                                <div className="inner-top">
                                                                    <div className="product-top thumbnail-container has-multiimage">
                                                                        <a href="/collections/frontpage/products/sweet-chili">

                                                                            <div className="respone_image" style={{ paddingTop: '100.0%' }}>

                                                                                <Image
                                                                                    src="/images/berry-2 (1).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                                <Image
                                                                                    src="/images/berry-2 (2).jpg"
                                                                                    alt="Sweet Chili"
                                                                                    width="1000"
                                                                                    height="1000"
                                                                                    loading="lazy"
                                                                                    className="product__thumbnail-second"
                                                                                    data-xblocker="passed"
                                                                                    style={{ visibility: 'visible' }} />

                                                                            </div>
                                                                        </a>
                                                                        {/* <div className="product--badge">

                                          <span className="badge badge--sale-pt"><i className="zmdi zmdi-flash"></i>&nbsp;-41%</span>

                                        </div> */}
                                                                    </div>
                                                                    <div className="product__info">
                                                                        <div className="product__title">
                                                                            <a href="/collections/frontpage/products/aiamond-halo-stud-barrings">
                                                                                <span>Sweet corn</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="jdgm-widget jdgm-preview-badge"></div>
                                                                        <div className="price-box mt-15">
                                                                            <div className="price-sale">
                                                                                <span className="special-price" data-price-grid="">
                                                                                    <span className="money" data-currency-usd="$14.00" data-currency="USD">$14.00</span>
                                                                                </span>
                                                                                <span className="old-price" data-compare-price-grid="">
                                                                                    <span className="money" data-currency-usd="$18.00" data-currency="USD">$18.00</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="item-swatch list-unstyled">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Fruits;