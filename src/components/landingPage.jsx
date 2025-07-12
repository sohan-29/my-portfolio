import { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [intro, setIntro] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/about');
        setIntro(response.data);
        console.log('Portfolio Data:', response.data);
      }
      catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="bg-[#3a3a3afe] w-full flex flex-col">
      <section className="w-full flex flex-col-reverse text-center sm:text-start sm:flex-row sm:justify-start item-center md:px-11 lg:px-20 xl:px-27 overflow-hidden">
        <div className="relative mb-20 md:my-44 lg:my-50 xl:my-63 gap-3 md:w-24/19 lg:w-13/14 xl:w-23/24">
          <div className="absolute z-20 top-24 right-[72vw] w-50 h-20 md:top-29 md:right-74 md:w-69 md:h-22 lg:top-33 lg:right-88 lg:w-80 lg:h-31 xl:top-42 xl:right-177 xl:w-88 xl:h-37 bg-[#da19319b] rounded-full"></div>
          <h1 className="font-medium text-3xl md:text-4xl lg:font-bold lg:text-5xl xl:text-6xl text-white">hello! im <span className="w-xl text-[#cf162e]">{intro?.name}</span></h1>
          <p className="sticky mt-3 mx-3 sm:mx-0 text-sm md:text-base lg:text-lg xl:text-xl z-20">{intro?.description}</p>
          <p className="sticky text-sm md:text-base lg:text-lg xl:text-xl z-20"><span className="text-white">{intro?.location}</span></p>
          <div className="sticky z-20 flex justify-center sm:justify-start gap-x-2 pt-1 font-mono text-sm print:hidden" role="list" aria-label="Contact links">
            <a href="mailto:sohan291106@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-[#222] text-white w-8 h-8 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail transition-all duration-200 group-hover:scale-118" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="tel:9701884781" aria-label="Phone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-[#222] text-white w-8 h-8 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone transition-all duration-200 group-hover:scale-118" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <a href="https://github.com/sohan-29?ref=selfso" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-[#222] text-white w-8 h-8 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github transition-all duration-200 group-hover:scale-118" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com/in/sohand76b0b1364?ref=selfso" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-[#222] text-white w-8 h-8 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-all duration-200 group-hover:scale-118" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute left-[80vw] bottom-41 w-29 h-29 md:left-59 md:bottom-111 md:w-37 md:h-37 lg:left-74 lg:bottom-127 lg:w-54 lg:h-54 xl:bottom-129 xl:left-90 xl:w-54 xl:h-54 bg-[#bf162d] rounded-full"></div>
          <div className="absolute top-4 left-[39vw] w-6 h-6 md:top-18 md:left-24 md:w-9 md:h-9 lg:top-13 lg:left-23 lg:w-15 lg:h-15 xl:top-11 xl:left-20 xl:w-18 xl:h-18 bg-[#bf162ddb] rounded-full"></div>
          <div className="absolute top-11 right-[54vw] w-18 h-18 md:top-27 md:right-42 md:w-28 md:h-28 lg:top-30 lg:right-60 lg:w-40 lg:h-40 xl:top-33 xl:right-69 xl:w-47 xl:h-47 bg-[#ca1931ea] rounded-full"></div>
          <img className="hidden sm:block z-10 sm:w-xl sm:h-xl rounded-full p-10 xl:mt-18 mt-11 md:mt-22 lg:mt-20" src='https://sohan-29.github.io/my-portfolio/profile.jpeg' alt="Profile image" />
          <img className="shadow-[0_0_1rem_#ff162e] sm:hidden w-29 h-29 mt-11 mb-9 mx-auto border-lg border-[#cf162e] rounded-full" src='https://sohan-29.github.io/my-portfolio/profile.jpeg' alt="Profile image" />
          <div className="absolute top-45 right-[13vw] w-11 h-11 bg-[#ca19316a] md:top-auto md:bottom-33 md:right-9 md:w-8 md:h-8 lg:bottom-36 lg:right-14 lg:w-11 lg:h-11 xl:bottom-29 xl:right-7 xl:w-13 xl:h-13 sm:bg-[#ca1931] rounded-full"></div>
          <div className="absolute md:bottom-17 md:left-37 md:w-22 md:h-22 lg:bottom-14 lg:left-47 lg:w-29 lg:h-29 xl:bottom-7 xl:left-59 xl:w-33 xl:h-33 bg-[#da1931dd] z-1 rounded-full"></div>
        </div>
      </section>
      <div className="relative w-full h-fit flex justify-center items-center">
        <svg className="absolute bottom-0 w-7 h-7 animate-bounce" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.996 491.996" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z"></path> </g> </g> </g></svg>
      </div>
    </div>
  )
}

export default LandingPage;
