import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/Home";
import Service from "./components/Service";
import Skils from "./components/Skils";
import Projects from "./components/Projects";
export default function Home() {
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

      </main>
    </div>
  );
}
