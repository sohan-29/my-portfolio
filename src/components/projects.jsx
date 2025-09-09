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
      <div className="min-h-screen flex flex-col items-center bg-[#2b2b2b] text-white">
        <h1 className="text-5xl pt-22 mb-9 font-bold">Projects</h1>
        <div className="relative flex items-center justify-center w-full">
          <img className="h-6 sm:h-8 aspect-auto mt-5 sm:px-6 sm:py-2 cursor-pointer" src="./icons/leftArrow.svg" onClick={scrollLeft}></img>
          <div className="projectWindow flex w-[90%] mt-10 gap-7 overflow-x-scroll scrollbar-none py-4 cursor-pointer">
            {data.map(project => (
              <div key={project.id} onClick={() => setActiveProject(project.id)} className={`group h-57 min-w-44 aspect-auto sm:min-w-[27vw] sm:min-h-[33vh] bg-[url(${project.img})] bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300` + (activeProject === project.id ? " absolute top-7 w-[69vw] aspect-auto left-13.5 sm:left-[15%] min-w-[33vw] min-h-[44vh] overflow-y-scroll" : "")}>
                <button onClick={(e) => { e.stopPropagation(); setActiveProject(null) }} className={"absolute top-2 right-2 text-white w-7 h-7 flex items-center justify-center " + (activeProject === project.id ? "block" : "hidden")}>X</button>
                <h2 className={"text-2xl font-semibold mb-4" + (activeProject === project.id ? " text-3xl" : " group-hover:text-3xl")}>{project.name}</h2>
                <p className={"text-gray-300"+ (activeProject === project.id ? "" : " line-clamp-4")}>{project.description}</p>
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