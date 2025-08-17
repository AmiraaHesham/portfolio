'use client';
import Link from 'next/link';
import React from 'react'

const Home = () => {

    return (
        <section id='home' className=' flex flex-col justify-center items-center text-center mt-20 mb-16 '>
            <div className='flex animate-slideX flex-col justify-center items-center md:w-[80%] xs:w-[90%]'>
                <h1 className=' lg:text-[150px] md:text-[120px] sm:text-[60px] xs:text-[60px] font-semibold bg-gradient-to-r from-[#d62828] via-color3 to-color2 bg-clip-text text-transparent'>FRONTEND DEVELOPER</h1>
                <h2 className='text-2xl mt-4 font-serif text-color4'>Passion Creating Beautiful And Resbonsive Design</h2>

                <div className='gap-7 flex mt-8 sm:text-xl xs:text-sm '>
                    <Link href="/veiwCV">  <button className='md:px-10  xs:px-5  py-3 border-4 rounded-full border-color3 shadow-xl shadow-color3 text-color3  hover:shadow-color2 hover:text-color2 hover:border-color2 font-serif font-semibold'>Veiw CV</button></Link>
                    <a href="/Amira Hesham CV.pdf" download className='md:px-10 xs:px-5 py-3 border-4 rounded-full  border-color2 shadow-xl shadow-color2 text-color2 hover:shadow-color3 hover:text-color3 hover:border-color3 font-serif font-semibold'>Dowenload CV</a>
                </div>
            </div>
        </section>

    )
}

export default Home
