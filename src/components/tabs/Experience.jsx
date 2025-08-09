import axios from "axios";
import { useEffect, useState } from "react";

const Experience = () => {
  const [expData, setExpData] = useState([]);
  useEffect(() => {
    const fetchExpData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/experience");
        setExpData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    }
    fetchExpData();
  }, []);
  return (
        <div className="tab-content mt-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Experience</h3>
        </div>
      );
    };

    export default Experience;
