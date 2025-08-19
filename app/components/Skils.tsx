'use client';
import React from 'react'
import { BiLogoTypescript, BiLogoVisualStudio } from 'react-icons/bi'
import { FaCss3Alt, FaGitAlt, FaGithub, FaJsSquare, FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from 'react-icons/ri'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skils() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section id='skils' className='flex justify-center items-center  mt-20 mb-16  '>
            <div className=' flex flex-col  w-[80%] '>
                <h1 data-aos="fade-up" className='text-4xl text-color3 font-serif font-semibold'>SKILS</h1>
                <div className='justify-center items-center flex flex-col my-10 '>
                    <h1 data-aos="fade-up" className='md:text-3xl xs:text-2xl text-color4 '>The skills, tools and technolo I Use
                    </h1>
                    <div className=' gap-5 md:w-[600px] xs:w-[340px]  flex flex-wrap justify-center items-center mt-10'>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-color3'><ImHtmlFive /></span>
                            <h1>HTML</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[50px] text-blue-700'><FaCss3Alt /></span>
                            <h1>CSS</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-blue-700'><RiTailwindCssFill /></span>
                            <h1>Tailwind</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-color2'><FaJsSquare /></span>
                            <h1>JavaScript</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[50px] text-blue-500'><BiLogoTypescript /></span>
                            <h1>TypeScript</h1>
                        </div>
                    </div>
                    <div className=' gap-5 md:w-[500px] xs:w-[300px] flex flex-wrap justify-center items-center mt-10'>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-blue-400'><FaReact /></span>
                            <h1>React.js</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-black'><RiNextjsFill /></span>
                            <h1>Next.js</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-orange-600'><FaGitAlt /></span>
                            <h1>Git</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-black'><FaGithub /></span>
                            <h1>GitHub</h1>
                        </div>
                    </div>
                    <div className=' gap-5 w-[350px] flex flex-wrap justify-center items-center mt-10'>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-blue-500'><BiLogoVisualStudio /></span>
                            <h1>VS Code</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <span className='text-[45px] text-black'><RiVercelFill /></span>
                            <h1>Vercel</h1>
                        </div>
                        <div data-aos="fade-up" className=' bg-color4 text-color1 mb-10 w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full   gap-2'>
                            <img src='/figma.png' className='w-[60px] h-[50px]'></img>
                            <h1>Figma</h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

