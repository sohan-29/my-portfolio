import { useState } from "react";
import LandingPage from "./landingPage";
import AboutMe from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

export const Header = () => {
  const [showNavs, setShowNavs] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between px-5 sm:px-18 py-3 bg-[#131313] w-full z-50 top-0 sticky">
      <div className="sm:mr-18 lg:mx-9 sm:text-3xl text-xl font-bold text-[#cf162e] flex justify-between cursor-pointer">
        <a href="/">@Sohan</a>
      <button className="sm:hidden flex flex-col justify-between p-2 h-7 w-8 border-[#dbdbdb] rounded-lg border-1 group" type="button"
      onClick={() => setShowNavs(!showNavs)}>
        <span className="block w-full h-[2px] bg-white"></span>
        <span className="block w-full h-[2px] bg-white"></span>
        <span className="block w-full h-[2px] bg-white"></span>
      </button>
      </div>
      <div className={"sm:flex flex-col sm:flex-row items-start sm:justify-around sm:items-center w-full sm:w-lg " + (showNavs ? 'flex mt-2 mt-l-1' : 'hidden')}>
        <a href="/" className="relative group text-sm sm:text-base lg:text-lg xl:text-lg text-[#ffffff]">Home
          <span className="sm:block absolute bottom-0 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span></a>
        <a href="/about" className="relative group text-sm sm:text-base lg:text-lg xl:text-lg text-[#ffffff]">About
          <span className="sm:block absolute bottom-0 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span></a>
        <a href="/skills" className="relative group text-sm sm:text-base lg:text-lg xl:text-lg text-[#ffffff]">Skills
          <span className="sm:block absolute bottom-0 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span></a>
        <a href="/projects" className="relative group text-sm sm:text-base lg:text-lg xl:text-lg text-[#ffffff]">Projects
          <span className="sm:block absolute bottom-0 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span></a>
        <a href="/contact" className="relative group text-sm sm:text-base lg:text-lg xl:text-lg text-[#ffffff]">Contact
          <span className="sm:block absolute bottom-0 left-0 w-0 h-[1px] bg-white rounded-full transition-all duration-300 group-hover:w-full"></span></a>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default Home;