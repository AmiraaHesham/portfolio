'use client';
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocalPhone, MdLocationOn, MdOutlineMailOutline } from 'react-icons/md';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
const Contact = () => {
    const SERVICE_ID = 'service_vgez1oi'
    const TEMPLATE_ID = 'template_cw6rvao'
    const PUBLIC_KEY = 'pw8_RQ1NdpuhuCnf-'

    const formRef = useRef<HTMLFormElement | null>(null);
    const [ok, setOk] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!formRef.current) return;
        setStatus("sending");
        setError(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus("success");
            formRef.current.reset();
        } catch (err: any) {
            setStatus("error");
            setError(err?.text || "Something went wrong");
        }
    }
    return (
        <section id='contact' className='flex justify-center items-center mt-20 mb-16'>
            <div className='flex md:flex-row xs:flex-col gap-10 justify-between  items-center w-[80%]'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <h1 className='text-4xl font-serif font-semibold text-color3 mb-10 '>Contact Us</h1>

                    <form className='w-[80%]' ref={formRef} onSubmit={handleSubmit}>
                        <label className='text-color3 font-semibold mb-5 text-2xl font-serif'>Name</label>
                        <input type="text" name='name' placeholder="Your Name" required className='bg-color1 text-color4 outline-none shadow-sm shadow-color2 placeholder:text-color4 placeholder:opacity-50 text-xl border border-color2 p-2 rounded w-full mb-4' />

                        <label className='text-color3 font-semibold mb-5 text-2xl font-serif'>Email</label>
                        <input type="email" name='email' placeholder="Your Email" required className='bg-color1 text-color4 outline-none shadow-sm shadow-color2 placeholder:text-color4 placeholder:opacity-50 text-xl border border-color2  p-2 rounded w-full mb-4' />

                        <label className='text-color3 font-semibold mb-5 text-2xl font-serif'>Message</label>

                        <textarea placeholder="Your Message" name='message' required className='bg-color1 text-color4 outline-none shadow-sm shadow-color2 placeholder:text-color4 placeholder:opacity-50 text-xl border border-color2 p-2 rounded w-full mb-4' rows={4}></textarea>

                        {status === "success" && <p className="mt-3 text-green-600">Message sent ✅</p>}
                        {status === "error" && <p className="mt-3 text-red-600">Failed: {error}</p>}
                        <button type="submit" className='bg-gradient-to-r from-[#d62828] via-color3 to-color2 py-2 rounded-3xl font-serif font-semibold text-lg px-8 hover:shadow-md hover:shadow-color3'>
                            {status === "sending" ? "Sending..." : "Send"}
                        </button>
                    </form>

                </div>
                <div className='border border-color2 w-[350px] h-[400px] rounded-lg p-5 shadow-md shadow-color2'>
                    <h1 className='text-4xl font-serif font-semibold text-color3 mb-10 '>Info</h1>
                    <div className='flex items-center gap-2  font-semibold my-10 text-xl'>
                        <MdOutlineMailOutline />
                        <h1>amira.hesham.fci@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-2  font-semibold my-10 text-xl'>
                        <MdLocalPhone />
                        <h1>+201062239344</h1>
                    </div>
                    <div className='flex items-center gap-2  font-semibold my-10 text-xl'>
                        <MdLocationOn />
                        <h1>Ismailia-Egypt</h1>
                    </div>
                    <div className='flex items-center gap-2  font-semibold my-10 text-xl'>
                        <FaGithub />
                        <a href='https://github.com/AmiraaHesham' target="_blank" rel="noopener noreferrer" >github.com/AmiraaHesham</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
