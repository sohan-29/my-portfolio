import { useEffect, useState } from "react";
import { Header } from "./home";

const Projects = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/projects');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };
    fetchData();
  }, []);
  const [activeProject, setActiveProject] = useState(null);
  const scrollLeft = () => {
    document.querySelector('.projectWindow').scrollBy({ left: -369, behavior: 'smooth' });
  }
  const scrollRight = () => {
    document.querySelector('.projectWindow').scrollBy({ left: 369, behavior: 'smooth' });
  }
  return (
    <>
      {location.pathname.includes("projects") && <Header />}
      <div className={`min-h-screen flex flex-col items-center bg-[#2b2b2b] text-white ${location.pathname.includes("projects") ? "overflow-hidden" : "overflow-hidden sm:overflow-visible"}`}>
        <h1 className="text-5xl pt-22 mb-9 font-bold">Projects</h1>
        <div className="relative sm:mt-10">
          <div className="absolute top-3 right-[16vw] w-33 h-33 md:top-66 md:left-0 md:w-13 md:h-13 lg:top-60 lg:left-0 lg:w-18 lg:h-18 xl:top-57 xl:left-0 xl:w-29 xl:h-29 bg-[#bf162dad] rounded-full"></div>
          <div className="absolute top-147 right-[9vw] w-47 h-47 md:top-77 md:right-69 md:w-33 md:h-33 lg:top-74 lg:right-96 lg:w-36 lg:h-36 xl:top-88 xl:right-144 xl:w-44 xl:h-44 bg-[#ca1931bd] rounded-full"></div>
          <div className="absolute top-47 right-[11vw] w-11 h-11 bg-[#ca19316a] md:top-74 md:bottom-auto md:right-67 md:w-15 md:h-15 lg:top-69 lg:right-98 lg:w-14 lg:h-14 xl:top-83 xl:right-139 xl:w-22 xl:h-22 sm:bg-[#ca19319b] rounded-full"></div>
          <div className="absolute bottom-19 left-[1vw] w-11 h-11 bg-[#ca19319b] md:top-auto md:bottom-0 md:right-39 md:left-auto md:w-12 md:h-12 lg:bottom-0 lg:right-49 lg:left-auto lg:w-10 lg:h-10 xl:bottom-11 xl:top-auto xl:left-auto xl:right-89 xl:w-13 xl:h-13 sm:bg-[#ca1931db] rounded-full"></div>
          <div className="absolute top-3 right-[16vw] w-33 h-33 md:top-auto md:bottom-44 md:left-66 md:w-10 md:h-10 lg:top-auto lg:bottom-47 lg:left-80 lg:w-11 lg:h-11 xl:bottom-43 xl:top-auto xl:left-96 xl:w-13 xl:h-13 bg-[#bf162dad] rounded-full z-10">l</div>
          <div className="absolute top-87 left-[18vw] w-23 h-23 md:top-auto md:bottom-29 md:left-51 md:w-22 md:h-22 lg:bottom-27 lg:left-66 lg:w-26 lg:h-26 xl:bottom-18 xl:left-96 xl:w-33 xl:h-33 bg-[#da19317d] z-0 rounded-full"></div>
        </div>
        <div className="relative flex items-center justify-center w-full">
          <img className="h-6 sm:h-8 aspect-auto mt-5 sm:px-6 sm:py-2 cursor-pointer" src="./icons/leftArrow.svg" onClick={scrollLeft}></img>
          <div className="projectWindow flex w-[90%] mt-10 gap-7 overflow-x-scroll scrollbar-none py-4 cursor-pointer">
            {data.map(project => (
              <div key={project.id} onClick={() => setActiveProject(project.id)} className={`z-10 group h-57 min-w-44 aspect-auto sm:min-w-[27vw] sm:min-h-[33vh] bg-[url(${project.img})] bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg transition-shadow duration-300` + (activeProject === project.id ? " absolute top-7 w-[69vw] aspect-auto left-13.5 sm:left-[15%] min-w-[33vw] min-h-[44vh] overflow-y-scroll" : "")}>
                <button onClick={(e) => { e.stopPropagation(); setActiveProject(null) }} className={"absolute top-2 right-2 text-white w-7 h-7 flex items-center justify-center " + (activeProject === project.id ? "block" : "hidden")}>X</button>
                <h2 className={"text-2xl font-semibold mb-4" + (activeProject === project.id ? " text-3xl" : " group-hover:text-3xl")}>{project.name}</h2>
                <p className={"text-gray-300"+ (activeProject === project.id ? "" : " line-clamp-4")}>{project.description}</p>
                <a href={project.link} className="hover:underline font-sm text-[#aaa] cursor-pointer">view project</a>
              </div>
            ))}
          </div>
          <img className="h-6 sm:h-8 aspect-auto mt-5 sm:px-6 sm:py-2 cursor-pointer" src="./icons/rightArrow.svg" onClick={scrollRight}></img>
        </div>
      </div>
    </>
  );
}

export default Projects;