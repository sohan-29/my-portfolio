const LandingPage = () => {
  return (
    <section className="w-full bg-[#3a3a3afe] flex flex justify-start item-center px-27 overflow-hidden">
      <div className="relative my-63 gap-3 w-23/24">
        <div className="absolute z-10 md:top-27 md:right-190 w-80 h-37 bg-[#da19319b] rounded-full"></div>
        <h1 className="font-bold text-6xl text-white">hello! im <span className="w-lg text-[#cf162e]">Sohan</span></h1>
        <p className="sticky my-3 text-base sm:text-lg z-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur commodi maxime dolores cum incidunt minus unde dicta reprehenderit id quidem necessitatibus ipsa, molestiae saepe provident veritatis, fugiat vitae quo!</p>
      </div>
      <div className="relative">
        <div className="absolute md:bottom-129 md:left-90 w-54 h-54 bg-[#bf162d] rounded-full"></div>
        <div className="absolute md:top-11 md:left-20 w-18 h-18 bg-[#bf162ddb] rounded-full"></div>
        <div className="absolute md:top-33 md:right-69 w-47 h-47 bg-[#ca1931ea] rounded-full"></div>
        <img src="src\assets\profile.jpeg" className="z-10 w-xl h-xl rounded-full p-10 my-18"/>
        <div className="absolute md:bottom-29 md:right-7 w-13 h-13 bg-[#ca1931] rounded-full"></div>
        <div className="absolute md:bottom-7 md:left-59 w-33 h-33 bg-[#da1931dd] z-1 rounded-full"></div>
      </div>
    </section>
  )
}

export default LandingPage;
