import { Header } from "./home";

const Skills = () => {
  return (
    <>
      {location.pathname.includes("skills") && <Header />}
      <div className="flex flex-col p-4 shadow-md bg-[#3b3b3bfe] text-white px-[7vw] h-full min-h-screen">
        <h2 className="text-[#eeeeeebe] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mx-[1vw] mt-18 border-b-2">Skills</h2>
        <div className="relative">
          <div className="radial-progress text-[#da1931fe] rotate-90" style={{ "--value": 90, "--size": "5rem" }} aria-valuenow={90} role="progressbar">
          </div>
          <span className="absolute left-5 top-6.5 text-[#eeeeeedb] mb-1">HTML</span>
        </div>
      </div>
    </>
  );
}

export default Skills;