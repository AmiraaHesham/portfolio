import Image from "next/image";
import Header from "./components/Header";
import HomeSection from "./components/Home";
export default function Home() {
  return (
    <div className="flex justify-center cursor-default " >
      <main className="">
        <Header />
        <HomeSection />
        <hr className="text-xl"></hr>
      </main>
    </div>
  );
}
