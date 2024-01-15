"use client"
import React from "react";
import Image from 'next/image'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

const Single = () => {
    const params = useParams<{ tag: string; item: string }>()
    // console.log(params)
    return (
        <>
            <Header />
            <div className='content container pt-80'>
                <div className='container-inner position-relative'>
                    <div className="title_section text-center">
                        <span className="title" style={{ color: '#222222' }}>
                            <p>{params.single}</p>
                        </span>
                    </div>
                    <div className="single-fruit text-center">
                        <Image
                            src={`/images/${params.single}.jpg`}
                            alt="fruit image"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Single;