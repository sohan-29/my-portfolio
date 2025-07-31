const AboutMe = () => {
    return (
        <section className="flex flex-col sm:flex-row items-center justify-center gap-11 bg-[#333333ff] text-white p-5 px-[7vw] min-h-169">
            <div className="w-3/9 text-center sm:text-left">
                <img src="https://sohan-29.github.io/my-portfolio/aboutProfile.jpeg" alt="About Me" className="w-md rounded-lg shadow-lg" />
            </div>
            <div className="w-6/9 text-center sm:text-left text-[#9f9f9f]">
                <h2 className="text-4xl text-[#efefef] font-bold mb-3">About Me</h2>
                <p className="text-lg mb-3">Hello! I'm <span className="text-[#cf162e] font-md">Sohan</span>, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I love coding and enjoy the challenge of solving complex problems. With a background in computer science, I have honed my skills in various programming languages and frameworks. I am always eager to learn new technologies and improve my craft.</p>
                <p className="text-lg mb-3">In my free time, I enjoy contributing to projects, exploring new tech trends, and sharing knowledge with the developer community.</p>
                <p className="text-lg">Feel free to connect with me on my social media platforms or check out my projects on GitHub!</p>
            </div>
        </section >
    )
}

export default AboutMe;