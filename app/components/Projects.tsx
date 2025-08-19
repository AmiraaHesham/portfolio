'use client';
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // مدة الحركة
    }, []);
    return (
        <section id='project' className='flex justify-center items-center mt-20 mb-16'>
            <div className=' mb-10  w-[90%]' >
                <h1 data-aos="fade-up" className='text-4xl text-color3 font-serif font-semibold'>MY PROJECTS</h1>
                <div className='mt-16'>
                    <h1 data-aos="fade-up" className='text-2xl text-color4 font-semibold mb-10 xs:w-[300px] md:w-[100%]'>Smart Attendance System (Graduation Project)  </h1>
                    <a href="https://smart-attendance-systemapp.vercel.app" data-aos="fade-up" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#d62828] via-color3 to-color2 py-3 rounded-3xl px-7 mt-24 hover:shadow-md hover:shadow-color3 ">Live Demo</a>
                    <div className="flex justify-center items-center">
                        <div className=' grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 my-10 gap-5 '>
                            <img data-aos="fade-up" src="/smart attendance/dashboard page.jpg" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/smart attendance/page1 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                                <img src="/smart attendance/page2 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg shadow-md shadow-color4 ' />
                            </div>
                            <img data-aos="fade-up" src="/smart attendance/currentClass page.jpg" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg shadow-md shadow-color4 ' />
                            <img data-aos="fade-up" src="/smart attendance/courses page.jpg" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/smart attendance/page3 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4 ' />
                                <img src="/smart attendance/page4 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg shadow-md shadow-color4 ' />
                            </div>
                            <img data-aos="fade-up" src="/smart attendance/weekly page.jpg" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />

                        </div>
                    </div>
                </div>

                <div className='mt-20'>
                    <h1 data-aos="fade-up" className='text-2xl text-color4 font-semibold mb-10 '>WatchHub(Saide Project)
                    </h1>
                    <a href="https://watch-hub-app.vercel.app/" data-aos="fade-up" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#d62828] via-color3 to-color2 py-3 rounded-3xl px-7 mt-24 hover:shadow-md hover:shadow-color3 ">Live Demo</a>
                    <div className="flex flex-col justify-center items-center">
                        <div className=' grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 my-10 gap-5 '>
                            <img src="/WatchHub/home page1.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/WatchHub/page1 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4 ' />
                                <img src="/WatchHub/page2 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg shadow-md shadow-color4  ' />
                            </div>
                            <img src="/WatchHub/movies page.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <img src="/WatchHub/details page1.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/WatchHub/page5 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[232px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                                <img src="/WatchHub/page3 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            </div>
                            <img src="/WatchHub/details page2.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />

                        </div>


                    </div>
                </div>

                <div className='mt-20'>
                    <h1 data-aos="fade-up" className='text-2xl text-color4 font-semibold mb-10'>SwiftHub (Freelance Project)
                    </h1>
                    <a href="https://swift-hub-xi.vercel.app/" data-aos="fade-up" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#d62828] via-color3 to-color2 py-3 rounded-3xl px-7 mt-24 hover:shadow-md hover:shadow-color3 ">Live Demo</a>
                    <div className="flex  justify-center items-center">
                        <div className=' grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 my-10 gap-5 '>
                            <img src="/SwiftHub/page1.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/SwiftHub/page1 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                                <img src="/SwiftHub/page3 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />

                            </div>
                            <img src="/SwiftHub/page3.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <img src="/SwiftHub/page5.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                            <div className="grid grid-cols-2 gap-3">
                                <img src="/SwiftHub/page4 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />
                                <img src="/SwiftHub/page2 phone.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[220px] h-[300px]  rounded-lg  shadow-md shadow-color4' />

                            </div>
                            <img src="/SwiftHub/page6.jpg" data-aos="fade-up" alt="Smart Attendance System" className='w-[450px] h-[300px]  rounded-lg shadow-md shadow-color4 ' />

                        </div>
                    </div>

                </div>
            </div >
        </section >
    )
}

export default Project


