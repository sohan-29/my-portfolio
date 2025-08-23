import axios from "axios";
import { Header } from "./home";
import { useEffect, useState } from "react";

const RadialProgress = ({ skill, icon, percent }) => {
  const [percentage, setPercentage] = useState(100);
  return (
    <div className="relative" onClick={() => {setPercentage(percent)}}>
      <div className={`z-10 radial-progress ${percentage === 100 ? `text-[#4e4e4eee]` : `text-[#ca1931] spin-once`}`} style={{ "--value": percentage, "--size": "5rem" }} aria-valuenow={90} role="progressbar"></div>
      <div className="absolute left-0 radial-progress text-[#4e4e4e4e] rotate-180" style={{ "--value": 100, "--size": "5rem" }} aria-valuenow={90} role="progressbar"></div>
      <img className="absolute left-10 top-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8" src={icon} alt={`${skill} icon`} />
    </div>
  );
}

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/skills');
        setSkills(response.data);
        console.log('Portfolio Data:', response.data);
      }
      catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {location.pathname.includes("skills") && <Header />}
      <div className="flex flex-col p-4 shadow-md bg-[#3b3b3bfe] text-white px-[7vw] h-full min-h-screen">
        <h2 className="text-[#eeeeeebe] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mx-[1vw] mt-18 border-b-2">Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-9 xl:gap-11 mt-11 mb-10 w-[88%] mx-auto">
          {skills.map((item, index) => (
            <RadialProgress key={index} icon={item.icon} skill={item.skill} percent={item.percentage} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;