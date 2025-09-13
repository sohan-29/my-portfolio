import axios from "axios";
import { Header } from "./home";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skillDetail, setSkillDetail] = useState("");
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
  const response = await axios.get('http://localhost:3001/api/skills');
        setSkills(response.data);
        setSkillDetail(response.data[0]?.discription || "");
      }
      catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    }
    fetchData();
  }, []);
  
  const handleSkillClick = (index, item) => {
    setActiveSkillIndex(index);
    setSkillDetail(item.discription || item.skill);
  };

  return (
    <>
      {location.pathname.includes("skills") && <Header />}
      <div className={`flex flex-col p-4 shadow-md bg-[#2e2e2e] text-white px-[7vw] h-full min-h-screen ${location.pathname.includes("skills") ? "overflow-hidden" : "overflow-hidden sm:overflow-visible"}`}>
        <h2 className="text-[#eeeeeebe] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mx-[1vw] mt-18 border-b-2 z-10">Skills</h2>
        <div className="relative sm:mt-10">
          <div className="absolute top-3 right-[16vw] w-33 h-33 | md:top-0 md:left-59 md:w-9 md:h-9 | lg:top-0 lg:left-69 lg:w-9 lg:h-9 | xl:top-0 xl:left-96 xl:w-15 xl:h-15 bg-[#bf162dad] rounded-full"></div>
          <div className="absolute top-144 right-[69vw] w-33 h-33 | md:top-101 md:right-18 md:w-29 md:h-29 | lg:top-96 lg:right-29 lg:w-33 lg:h-33 | xl:top-129 xl:right-69 xl:w-44 xl:h-44 bg-[#ca1931a1] rounded-full">k</div>
          <div className="absolute top-47 right-[11vw] w-11 h-11 bg-[#ca19316a] | md:top-auto md:bottom-11 md:right-152 md:w-16 md:h-16 | lg:bottom-11 lg:right-201 lg:w-19 lg:h-19 | xl:top-auto xl:bottom-11 xl:left-0 xl:w-23 xl:h-23 sm:bg-[#ca1931af] rounded-full"></div>
          <div className="absolute top-87 left-[18vw] w-23 h-23 | md:top-69 md:left-39 md:w-20 md:h-20 | lg:top-50 lg:left-44 lg:w-20 lg:h-20 | xl:top-69 xl:left-59 xl:w-29 xl:h-29 bg-[#da19316d] z-0 rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-9 xl:gap-11 mt-11 mb-10 w-[88%] mx-auto">
          {skills.map((item, index) => {
            const isActive = activeSkillIndex === index;
            const displayPercentage = isActive ? item.percentage : 100;
            return (
              <div key={index} className="relative" onClick={() => handleSkillClick(index, item)}>
                <div className={`z-10 radial-progress ${isActive ? `text-[#ca1931] spin-once` : `text-[#4e4e4eee]`}`} style={{ "--value": displayPercentage, "--size": "5rem" }} aria-valuenow={displayPercentage} role="progressbar"></div>
                <div className="absolute left-0 radial-progress text-[#4e4e4e4e] rotate-180" style={{ "--value": 100, "--size": "5rem" }} aria-valuenow={100} role="progressbar"></div>
                <img className="absolute left-10 top-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8" src={`./icons/${item.icon}`} alt={`${item.skill} icon`} />
              </div>
            );
          })}
        </div>
        {skillDetail && (
          <div className="text-lg text-[#aaaaaa] text-center m-11 z-10">{skillDetail}</div>
        )}
      </div>
    </>
  );
}

export default Skills;
