import axios from "axios";
import { useEffect, useState } from "react";

const Experience = () => {
  const [expData, setExpData] = useState([]);
  useEffect(() => {
    const fetchExpData = async () => {
      try {
  const response = await axios.get("https://my-portfolio-api-ahhw.onrender.com/api/experience");
        setExpData(response.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    }
    fetchExpData();
  }, []);
  return (
        <div className="mt-6">
          {expData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col sm:flex-row w-full sm:w-fit item-center justify-between sm:gap-3">
              <h2 className="text-lg md:text-xl lg:text-2xl text-[#efefefbf] font-bold">{item.company}</h2>
              <p className="text-xs sm:text-sm text-[#999999] mt-0 md:mt-1.5 lg:mt-2 xl:mt-2.5">{item.location}</p>
              </div>
              <p className="text-sm md:text-sm lg:text-base text-[#999999] italic">{item.title}</p>
              <p className="text-xs sm:text-sm lg:text-base text-[#ca1931] font-semibold">
                {item.from} - {item.to.split(" ")[1] <= new Date().getFullYear() ? item.to : "present"}
              </p>
              <p className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg text-[#ddd]">{item.description1}</p>
              <p className="mt-1 text-xs sm:text-sm lg:text-base xl:text-lg text-[#ddd]">{item.description2}</p>
              <p className="mt-1 text-xs sm:text-sm lg:text-base xl:text-lg text-[#ddd]">{item.description3}</p>
            </div>
          ))}
        </div>
      );
    };

    export default Experience;
