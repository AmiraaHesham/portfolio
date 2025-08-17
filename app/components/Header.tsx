"use client";
import React from 'react'
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { HiMiniSlash } from 'react-icons/hi2';
import { VscListSelection } from 'react-icons/vsc';


const Header = () => {

    const handleBtnList = () => {
        const list = document.querySelector('.list');
        if (list) {
            list.classList.toggle('hidden');

        }
    }
    return (
        <div>
            <div className=' w-[100%] bg-color1 text-color4 '>
                <div className=' flex justify-center items-center animate-slideY  '>


                    <div className=' mt-5 cursor-pointer  md:w-[80%] xs:w-[90%]  font-semibold  drop-shadow-[0_4px_5px_rgba(255,255,255,0.6)]'>

                        <nav className='h-[100px] flex items-center justify-between rounded-xl gap-0  bg-color1 text-color4  border  border-color4  px-5'>

                            <span className=' text-color3 md:text-4xl  xs:text-xl sm:text-2xl  font-serif hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)]  hover:shadow-color4'>Amira Hesham</span>
                            <div className='flex items-center xl:gap-6 xs:gap-1'>
                                <span className='text-color3 xl:text-3xl sm:text-[2xl] xs:text-xl'><FaLessThan />
                                </span>
                                <span className=' xl:hidden xs:flex text-color4 text-2xl hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)]  hover:shadow-color4'
                                    onClick={handleBtnList}
                                ><VscListSelection />
                                </span>
                                <span className='xl:flex xs:hidden gap-7 '>
                                    <a href='#home' className='text-2xl hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)]  hover:shadow-color4'>HOME</a>
                                    <a href='#service' className='text-2xl hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>SERVICE</a>
                                    <span className='text-2xl hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>SKILS</span>
                                    <span className='text-2xl hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>PROJECTS</span>
                                    <span className='text-2xl hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>CONTACT</span>
                                </span>
                                <span className='flex text-color3 xl:text-3xl sm:text-[2xl] xs:text-xl'> <HiMiniSlash />
                                    <FaGreaterThan />
                                </span>
                            </div>
                        </nav >
                        <div className='flex justify-end xl:hidden relative'>
                            <div className='list  hidden absolute '>
                                <div className='flex  flex-col  bg-color1 border border-color4 w-[200px] text-2xl  gap-3 p-7 rounded-lg mt-2'>
                                    <a href='#home' className=' hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)]  hover:shadow-color4'>HOME</a>
                                    <span className=' hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>SERVICE</span>
                                    <span className=' hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>SKILS</span>
                                    <span className=' hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>PROJECTS</span>
                                    <span className=' hover:text-color3 hover:transition-colors hover:duration-300 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.6)] hover:shadow-color4'>CONTACT</span>
                                </div>
                            </div >
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Header
