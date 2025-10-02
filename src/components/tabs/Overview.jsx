import axios from "axios";
import { useEffect, useState } from "react";

const Overview = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://my-portfolio-api-ahhw.onrender.com/api/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="mt-6">
      {Object.values(aboutData).map((description, index) => {
          return (
            <div key={index}>
              {index === 0 ? <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-3">Hello! I'm <span className="text-[#cf162e] font-md">Sohan</span>, {description} </p> :
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4">{description}</p>}
            </div>
          )
        })}
    </div>
  );
};

export default Overview;
