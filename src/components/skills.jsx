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
        console.log('Portfolio Data:', response.data);
      }
      catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    }
    fetchData();
    console.log(skillDetail)
  }, []);
  
  const handleSkillClick = (index, item) => {
    setActiveSkillIndex(index);
    setSkillDetail(item.discription || item.skill);
  };

  return (
    <>
      {location.pathname.includes("skills") && <Header />}
      <div className="flex flex-col p-4 shadow-md bg-[#2d2d2d] text-white px-[7vw] h-full min-h-screen">
        <h2 className="text-[#eeeeeebe] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mx-[1vw] mt-18 border-b-2">Skills</h2>
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
          <div className="text-lg text-[#aaaaaa] text-center m-11">{skillDetail}</div>
        )}
      </div>
    </>
  );
}

export default Skills;
