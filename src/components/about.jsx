import { useEffect, useState } from "react";
import axios from "axios";
import Overview from "./tabs/Overview";
import Academics from "./tabs/Academics";
import Experience from "./tabs/Experience";
import Resume from "./tabs/Resume";
import { Header } from "./home";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { name: 'Overview', id: 'overview' },
    { name: 'Academics', id: 'academics' },
    { name: 'Experience', id: 'experience' },
    { name: 'Resume', id: 'resume' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'academics':
        return <Academics />;
      case 'experience':
        return <Experience />;
      case 'resume':
        return <Resume />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      {location.pathname.includes("about") && <Header />}
      <section id="about" className="overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-11 bg-[#333333ff] text-white p-5 px-[7vw] h-full min-h-screen">
        <div className="relative w-4/9 md:w-4/10 lg:w-4/10 xl:w-3/9 aspect-square text-center sm:text-left">
          <img src="https://sohan-29.github.io/my-portfolio/aboutProfile.png" alt="About Me" className="w-sm lg:w-lg xl:w-lg mt-7 lg:mt-17 xl:mt-auto xl:mb-9 rounded-full border-4 text-[#ca1931ea] shadow-[0_0_11px_#ca1931ea,0_0_29px_#ca1931ef]" />
        </div>
        <div className="relative sm:mt-10">
          <div className="absolute top-3 right-[16vw] w-33 h-33 md:top-10 md:left-33 md:w-17 md:h-17 lg:top-17 lg:left-27 lg:w-9 lg:h-9 xl:top-11 xl:left-44 xl:w-13 xl:h-13 bg-[#bf162dad] rounded-full"></div>
          <div className="absolute top-147 right-[9vw] w-47 h-47 md:top-39 md:right-39 md:w-33 md:h-33 lg:top-40 lg:right-61 lg:w-40 lg:h-40 xl:top-49 xl:right-96 xl:w-44 xl:h-44 bg-[#ca1931bd] rounded-full"></div>
          <div className="absolute top-47 right-[11vw] w-11 h-11 bg-[#ca19316a] md:top-auto md:bottom-33 md:right-9 md:w-8 md:h-8 lg:bottom-36 lg:right-5 lg:w-9 lg:h-9 xl:bottom-39 xl:right-1 xl:w-13 xl:h-13 sm:bg-[#ca1931db] rounded-full"></div>
          <div className="absolute top-87 left-[18vw] w-23 h-23 md:top-auto md:bottom-44 md:left-69 md:w-22 md:h-22 lg:bottom-29 lg:left-77 lg:w-24 lg:h-24 xl:bottom-18 xl:left-79 xl:w-33 xl:h-33 bg-[#da19317d] z-0 rounded-full"></div>
        </div>
        <div className="relative w-8/9 sm:w-6/9 md:mt-9 text-center sm:text-left text-[#9f9f9f]">
          <h2 className="text-2xl md:text-4xl xl:text-5xl text-[#efefefef] font-bold mb-3">About Me</h2>
          <div role="tablist" className="tabs flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap border-b-2 w-[90%]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                onClick={() => setActiveTab(tab.id)}
                className={`tab tab-active flex items-center text-sm md:text-base lg:text-lg xl:text-xl hover:text-red-500 transition-all duration-100
                ${activeTab === tab.id
                    ? "text-red-600 border-b-2"
                    : "text-gray-300"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="tab-content-container mt-6 lg:min-h-[44vh]">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
