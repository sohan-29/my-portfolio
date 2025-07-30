const AboutMe = () => {
    return (
        <section className="flex flex-col sm:flex-row items-center justify-center gap-7 h-screen bg-[#f0f0f0] p-5">
            <div className="max-w-2xl text-center sm:text-left">
                <img src="https://sohan-29.github.io/my-portfolio/profile.jpeg" alt="About Me" className="w-full h-auto mb-5 rounded-lg shadow-lg" />
            </div>
            <div className="max-w-2xl text-center sm:text-left">
                <h2 className="text-3xl font-bold mb-3">About Me</h2>
                <p className="text-lg mb-3">Hello! I'm Sohan, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I love coding and enjoy the challenge of solving complex problems.</p>
                <p className="text-lg mb-3">With a background in computer science, I have honed my skills in various programming languages and frameworks. I am always eager to learn new technologies and improve my craft.</p>
                <p className="text-lg mb-3">In my free time, I enjoy contributing to open-source projects, exploring new tech trends, and sharing knowledge with the developer community.</p>
                <p className="text-lg">Feel free to connect with me on my social media platforms or check out my projects on GitHub!</p>
            </div>
        </section >
    )
}

export default AboutMe;