import axios from "axios";
import { useEffect, useState } from "react";

const Academics = () => {
  const [academics, setAcademics] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/academics');
        setAcademics(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);
  return (
    <div className="tab-content mt-6">
      {Array.isArray(academics) && academics.map((item, index) => (
        <div key={index} className="mb-8">
          {console.log(item)}
          <h2 className="text-base md:text-lg lg:text-xl text-[#efefefbf] font-bold">{item.InstituteName}</h2>
          <p className="text-xs md:text-sm lg:text-base text-[#999999] italic">{item.course}</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#ca1931] font-semibold">
            {item.startYear} - {item.endYear <= new Date().getFullYear() ? item.endYear : "present"}
          </p>
          <p className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">{item.discription1}</p>
          <p className="mt-1 text-xs sm:text-sm lg:text-base xl:text-lg">{item.discription2}</p>
        </div>
      ))}
    </div>
  );
};

export default Academics;
