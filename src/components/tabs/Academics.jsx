import axios from "axios";
import { useEffect, useState } from "react";

const Academics = () => {
  const [academics, setAcademics] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/academics');
        console.log(response.data)
        setAcademics(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);
  return (
    <div className="tab-content mt-6">
{      console.log(academics)
}      {Array.isArray(academics) && academics.map((item, index) => (
        <div key={index} className="mb-8 p-4 border rounded-lg">
          {console.log(item)}
          <h2 className="text-xl font-bold">{item.InstituteName}</h2>
          <p className="text-gray-600">{item.course}</p>
          <p className="text-sm text-gray-500">
            {item.startYear} - {item.endYear <= new Date().getFullYear() ? item.endYear : "present"}
          </p>
          <p className="mt-2">{item.discription1}</p>
          <p className="mt-1">{item.discription2 }</p>
        </div>
      ))}
    </div>
  );
};

export default Academics;
