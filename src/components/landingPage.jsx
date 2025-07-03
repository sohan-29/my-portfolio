const LandingPage = () => {
  return (
    <section className="w-full bg-[#3a3a3afe] flex flex justify-start item-center lg:px-20 xl:px-27 overflow-hidden">
      <div className="relative lg:my-50 xl:my-63 gap-3 lg:w-13/14 xl:w-23/24">
        <div className="absolute z-10 lg:top-33 lg:right-88 lg:w-80 lg:h-31 xl:top-27 xl:right-190 xl:w-80 xl:h-37 bg-[#da19319b] rounded-full"></div>
        <h1 className="font-bold text-6xl text-white">hello! im <span className="w-xl text-[#cf162e]">Sohan</span></h1>
        <p className="sticky my-3 text-base sm:text-xl z-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur commodi maxime dolores cum incidunt minus unde dicta reprehenderit id quidem necessitatibus ipsa, molestiae saepe provident veritatis, fugiat vitae quo!</p>
      </div>
      <div className="relative">
        <div className="absolute lg:left-74 lg:bottom-127 lg:w-54 lg:h-54 xl:bottom-129 xl:left-90 xl:w-54 xl:h-54 bg-[#bf162d] rounded-full"></div>
        <div className="absolute lg:top-13 lg:left-23 lg:w-15 lg:h-15 xl:top-11 xl:left-20 xl:w-18 xl:h-18 bg-[#bf162ddb] rounded-full"></div>
        <div className="absolute lg:top-30 lg:right-60 lg:w-40 lg:h-40 xl:top-33 xl:right-69 xl:w-47 xl:h-47 bg-[#ca1931ea] rounded-full"></div>
        <img src="src\assets\profile.jpeg" className="z-10 w-xl h-xl rounded-full p-10 xl:mt-18 lg:mt-20"/>
        <div className="absolute lg:bottom-36 lg:right-14 lg:w-11 lg:h-11 xl:bottom-29 xl:right-7 xl:w-13 xl:h-13 bg-[#ca1931] rounded-full"></div>
        <div className="absolute lg:bottom-14 lg:left-47 lg:w-29 lg:h-29 xl:bottom-7 xl:left-59 xl:w-33 xl:h-33 bg-[#da1931dd] z-1 rounded-full"></div>
      </div>
    </section>
  )
}

export default LandingPage;
