import axios from "axios";
import { useEffect, useState } from "react";

const Academics = () => {
  const [academics, setAcademics] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/academics');
        console.log(response)
        setAcademics(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);
  return (
    <div className="tab-content mt-6">
    </div>
  );
};

export default Academics;
