"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeSection from "./components/Home";
import Service from "./components/Service";
import Skils from "./components/Skils";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center h-screen bg-color1">
        <img src="/loading icon.png" alt="" className="w-[70px] h-[70px]  border-t-transparent rounded-full animate-spin" />
        <h1 className="md:text-5xl xs:text-4xl  font-serif font-semibold animate-pulse bg-gradient-to-r from-[#d62828] via-color3 to-color2 bg-clip-text text-transparent ">Amira Hesham</h1>

      </div>
    );
  }
  return (
    <div className="flex justify-center cursor-default " >
      <main className="">
        <Header />
        <HomeSection />
        <hr></hr>
        <Service />
        <hr></hr>
        <Skils />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Contact />
        <hr></hr>
        <Footer />
      </main>
    </div>
  );
}
