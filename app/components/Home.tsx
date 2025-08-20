'use client';
import Link from 'next/link';
import React from 'react'

export default function Home() {

    return (
        <section id='home' className=' flex flex-col justify-center items-center text-center mt-20 mb-16 '>
            <div className='flex  flex-col justify-center items-center md:w-[80%] xs:w-[90%]'>

                <div className='flex xl:flex-row xs:flex-col-reverse gap-5 items-center justify-center'>
                    <h1 className='animate-slideX text-[100px] md:text-[120px]  xs:text-[60px] font-semibold bg-gradient-to-r from-[#d62828] via-color3 to-color2 bg-clip-text text-transparent'>FRONTEND DEVELOPER</h1>

                    <img src='/icon frontend.png' className='lg:w-[400px] lg:h-[400px] xs:w-[350px] xs:h-[350px] animate-slideRight'></img>
                </div>
                <h2 className='animate-slideX text-2xl mt-4 font-serif text-color4'>Passion Creating Beautiful And Responsive Design</h2>

                <div className=' animate-slideX gap-7 flex mt-8 sm:text-xl xs:text-sm '>
                    <Link href="/veiwCV">  <button className='md:px-10  xs:px-5  py-3 border-4 rounded-full border-color3 shadow-xl shadow-color3 text-color3  hover:shadow-color2 hover:text-color2 hover:border-color2 font-serif font-semibold'>Veiw CV</button></Link>
                    <a href="/Amira Hesham CV.pdf" download className='md:px-10 xs:px-5 py-3 border-4 rounded-full  border-color2 shadow-xl shadow-color2 text-color2 hover:shadow-color3 hover:text-color3 hover:border-color3 font-serif font-semibold'>Dowenload CV</a>
                </div>
            </div>
        </section>

    )
}

