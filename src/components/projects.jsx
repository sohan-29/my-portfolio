import { useState } from "react";

const Projects = () => {
  const data = [
    { id: 1, name: 'Project One', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolorum dolor ab fugiat laudantium recusandae! Eum, repellendus? Quaerat laboriosam in molestiae doloribus, quisquam ipsa laudantium accusantium recusandae asperiores iusto ullam." },
    { id: 2, name: 'Project Two', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus libero ipsam quis nulla, ab cupiditate rerum quisquam incidunt quos maiores culpa eaque fugit dolorum iusto expedita. Sequi, ut amet." },
    { id: 3, name: 'Project Three', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus libero ipsam quis nulla, ab cupiditate rerum quisquam incidunt quos maiores culpa eaque fugit dolorum iusto expedita. Sequi, ut amet." },
    { id: 4, name: 'Project Four', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus libero ipsam quis nulla, ab cupiditate rerum quisquam incidunt quos maiores culpa eaque fugit dolorum iusto expedita. Sequi, ut amet." },
    { id: 5, name: 'Project Five', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus libero ipsam quis nulla, ab cupiditate rerum quisquam incidunt quos maiores culpa eaque fugit dolorum iusto expedita. Sequi, ut amet." },
    { id: 6, name: 'Project Six', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus libero ipsam quis nulla, ab cupiditate rerum quisquam incidunt quos maiores culpa eaque fugit dolorum iusto expedita. Sequi, ut amet." },
  ]
  const [activeProject, setActiveProject] = useState(null);
  const scrollLeft = () => {
    document.querySelector('.projectWindow').scrollBy({ left: -300, behavior: 'smooth' });
  }
  const scrollRight = () => {
    document.querySelector('.projectWindow').scrollBy({ left: 300, behavior: 'smooth' });
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2b2b2b] text-white">
      <h1 className="text-4xl font-bold">Projects Page</h1>
      <div className="relative flex items-center justify-center w-full">
        <button className="mt-5 px-6 py-2" onClick={scrollLeft}>&lt;</button>
        <div className="projectWindow flex w-[90%] mt-10 gap-7 overflow-x-scroll scrollbar-none py-4">
          {data.map(project => (
            <div key={project.id} onClick={()=>setActiveProject(project.id)} className={"group min-w-[27vw] min-h-[33vh] bg-[url('/profile.jpeg')] bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" + (activeProject === project.id ? " absolute top-0 left-[34%] w-[33vw] h-[44vh]" : "")}>
              <button onClick={(e)=>{e.stopPropagation(); setActiveProject(null)}} className={"absolute top-2 right-2 text-white w-7 h-7 flex items-center justify-center " + (activeProject === project.id ? "block" : "hidden")}>X</button>
              <h2 className="group-hover:text-3xl text-2xl font-semibold mb-4">{project.name}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-5 px-6 py-2" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default Projects;