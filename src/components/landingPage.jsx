const LandingPage = () => {
  return (
    <section className="w-full bg-[#3a3a3afe] flex flex-col-reverse text-center sm:text-start sm:flex-row sm:justify-start item-center md:px-11 lg:px-20 xl:px-27 overflow-hidden">
      <div className="relative mb-20 md:my-44 lg:my-50 xl:my-63 gap-3 md:w-24/19 lg:w-13/14 xl:w-23/24">
        <div className="absolute z-10 top-24 right-[72vw] w-50 h-20 md:top-29 md:right-74 md:w-69 md:h-22 lg:top-33 lg:right-88 lg:w-80 lg:h-31 xl:top-27 xl:right-181 xl:w-88 xl:h-37 bg-[#da19319b] rounded-full"></div>
        <h1 className="font-medium text-3xl md:text-4xl lg:font-bold lg:text-5xl xl:text-6xl text-white">hello! im <span className="w-xl text-[#cf162e]">Sohan</span></h1>
        <p className="sticky my-3 mx-3 sm:mx-0 text-sm md:text-base lg:text-lg xl:text-xl z-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur commodi maxime dolores cum incidunt minus unde dicta reprehenderit id quidem necessitatibus ipsa, molestiae saepe provident veritatis, fugiat vitae quo!</p>
      </div>
      <div className="relative mt-10">
        <div className="absolute left-[80vw] bottom-41 w-29 h-29 md:left-59 md:bottom-111 md:w-37 md:h-37 lg:left-74 lg:bottom-127 lg:w-54 lg:h-54 xl:bottom-129 xl:left-90 xl:w-54 xl:h-54 bg-[#bf162d] rounded-full"></div>
        <div className="absolute top-4 left-[39vw] w-6 h-6 md:top-18 md:left-24 md:w-9 md:h-9 lg:top-13 lg:left-23 lg:w-15 lg:h-15 xl:top-11 xl:left-20 xl:w-18 xl:h-18 bg-[#bf162ddb] rounded-full"></div>
        <div className="absolute top-11 right-[54vw] w-18 h-18 md:top-27 md:right-42 md:w-28 md:h-28 lg:top-30 lg:right-60 lg:w-40 lg:h-40 xl:top-33 xl:right-69 xl:w-47 xl:h-47 bg-[#ca1931ea] rounded-full"></div>
        <img className="hidden sm:block z-10 sm:w-xl sm:h-xl rounded-full p-10 xl:mt-18 mt-11 md:mt-22 lg:mt-20" src='./profile.jpeg' alt="Profile image" />
        <img className="shadow-[0_0_1rem_#ff162e] sm:hidden w-29 h-29 mt-11 mb-9 mx-auto border-lg border-[#cf162e] rounded-full" src='./profile.jpeg' alt="Profile image" />
        <div className="absolute top-45 right-[13vw] w-11 h-11 bg-[#ca19316a] md:top-auto md:bottom-33 md:right-9 md:w-8 md:h-8 lg:bottom-36 lg:right-14 lg:w-11 lg:h-11 xl:bottom-29 xl:right-7 xl:w-13 xl:h-13 sm:bg-[#ca1931] rounded-full"></div>
        <div className="absolute md:bottom-17 md:left-37 md:w-22 md:h-22 lg:bottom-14 lg:left-47 lg:w-29 lg:h-29 xl:bottom-7 xl:left-59 xl:w-33 xl:h-33 bg-[#da1931dd] z-1 rounded-full"></div>
      </div>
    </section>
  )
}

export default LandingPage;
