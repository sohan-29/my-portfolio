import { Header } from "./home";

const Skills = () => {
  return (
    <>
      {location.pathname.includes("skills") && <Header />}
      <div className="flex flex-col p-4 shadow-md bg-[#3b3b3bfe] text-white px-[7vw] h-full min-h-screen">
        <h2 className="text-[#eeeeeeee] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mx-[1vw] mt-18 border-b-2">Skills</h2>
      </div>
    </>
  );
}

export default Skills;