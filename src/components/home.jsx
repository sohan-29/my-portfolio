import LandingPage from "./landingPage";

const Header = () => {
  return (
    <div className="flex justify-between px-18 py-3 bg-[#222222] w-full">
      <span className="mx-9 text-3xl font-bold text-[#cf162e]">@sohan</span>
      <div className="flex justify-around items-center w-lg">
        <a href="#" className="text-md text-[#ffffff]">Home</a>
        <a href="#" className="text-md text-[#ffffff]">About</a>
        <a href="#" className="text-md text-[#ffffff]">Skills</a>
        <a href="#" className="text-md text-[#ffffff]">Projects</a>
        <a href="#" className="text-md text-[#ffffff]">Contact</a>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
    </>
  )
}

export default Home;