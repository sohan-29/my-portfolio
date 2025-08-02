import { useEffect, useState } from "react";
import axios from "axios";

const AboutMe = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/about');
        setAboutData(response.data);
        console.log('About Data:', response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
    console.log(aboutData);
  }, []);

  return (
    <section id="about" className="flex flex-col sm:flex-row items-center justify-center gap-11 bg-[#333333ff] text-white p-5 px-[7vw] min-h-169">
      <div className="relative w-3/9 aspect-square text-center sm:text-left">
        <img src="https://sohan-29.github.io/my-portfolio/aboutProfile.png" alt="About Me" className="w-sm mt-6 rounded-full border-4 text-[#ca1931ea] shadow-[0_0_11px_#ca1931ea,0_0_29px_#ca1931ef]" />
      </div>
      <div className="w-6/9 text-center sm:text-left text-[#9f9f9f]">
        <h2 className="text-4xl text-[#efefef] font-bold mb-3">About Me</h2>
        {Object.values(aboutData).map((description, index) => {
          return (
            <>
              {index === 0 ? <p className="text-xl mb-3">Hello! I'm <span className="text-[#cf162e] font-md">Sohan</span>, {description} </p> :
                <p key={index} className="text-xl mb-4">{description}</p>}
            </>
          )
        })}
      </div>
    </section >
  )
}

export default AboutMe;
