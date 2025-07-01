const Header = () => {
  return (
    <div className="flex justify-between px-18 py-3 bg-[#292929]">
      <span className="text-3xl font-bold text-[#e50914]">@sohan</span>
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
    </>
  )
}

export default Home;