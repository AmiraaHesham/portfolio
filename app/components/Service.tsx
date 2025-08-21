'use client';
import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosLaptop } from 'react-icons/io';
import { SiCssdesignawards } from 'react-icons/si';
import { MdOutlinePhonelink } from 'react-icons/md';
export default function Service() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // مدة الحركة
    }, []);
    return (
        <section id='service' className='flex justify-center items-center  mt-20 mb-16  '>
            <div className=' flex flex-col  w-[80%] '>
                <h1 data-aos="fade-up" className='text-4xl text-color3 font-serif font-semibold'>SERVICE</h1>

                <div className='flex flex-col xs:justify-center xs:items-center lg:justify-normal lg:items-stretch'>

                    <div data-aos="fade-up" className='xl:w-[650px] xs:w-[100%] rounded-md p-5 border border-color4 mt-10 shadow-md shadow-color4'>
                        <h1 className='text-3xl text-color4 flex items-center gap-5'><IoIosLaptop className='text-color2' />Website Devolpment</h1>
                        <h1 className='text-xl mt-2 text-left text-color4'>I create websites based on your ready-made design. Whether it’s a landing page or a business card website, I will make it look great and work smoothly on any device.</h1>
                    </div>
                    <div data-aos="fade-up" className='flex justify-center'>
                        <hr className='w-[2px] h-20  bg-color3 '></hr>

                    </div>
                    <div className='flex lg:justify-end xs:justify-center'>
                        <div data-aos="fade-up" className='xl:w-[650px] xs:w-[100%] rounded-md p-5 border border-color4 shadow-md shadow-color4 '>
                            <h1 className='text-3xl text-color4  flex items-center gap-5'><SiCssdesignawards className='text-color2' />Website Design</h1>
                            <h1 className='text-xl mt-2 text-left text-color4'>I can design your website from scraatch. I create modern, simple and easy
                                to use designs that fit your brand and goals</h1>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='flex justify-center'>
                        <hr className='w-[2px]  h-20 bg-color3 '></hr>

                    </div>
                    <div data-aos="fade-up" className='xl:w-[650px] xs:w-[100%] rounded-md p-5 border border-color4 shadow-md shadow-color4'>
                        <h1 className='text-3xl text-color4  flex items-center gap-5'><MdOutlinePhonelink className='text-color2' />Responsive Design</h1>
                        <h1 className='text-xl mt-2 text-left text-color4'>I create responsive website based on your ready-made design
                            business card Website. I will make it look great and work smoothly on any device.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

