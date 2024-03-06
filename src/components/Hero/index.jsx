const logos = [
    { id: 1, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/javascript.svg", title: "Javascript", visibleInDarkMode: true },
    { id: 2, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/html5.svg", title: "HTML5", visibleInDarkMode: true },
    { id: 3, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/react.svg", title: "ReactJS", visibleInDarkMode: true },
    { id: 4, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/redux.svg", title: "Redux", visibleInDarkMode: true },
    { id: 5, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/tailwind.svg", title: "Tailwind CSS", visibleInDarkMode: true },
    { id: 6, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/typescript.svg", title: "Typescript", visibleInDarkMode: true },
    { id: 7, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/css3.svg", title: "CSS3", visibleInDarkMode: true },
    { id: 8, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/nodejs.svg", title: "NodeJS", visibleInDarkMode: false },
    { id: 9, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/mongodb.svg", title: "MongoDB", visibleInDarkMode: false },
    { id: 10, path: "https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos/github.svg", title: "Github", visibleInDarkMode: false },
]

function Hero() {
    return (
        <section
            id="about"
            className="pt-5 "
        >
            <div className="flex flex-col lg:mt-10 xl:flex-row xl:mt-28 ">
                <div className="flex items-center justify-center basis-1/4">
                    <img
                        className="h-48 w-48 rounded-full"
                        src="https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/my-image-a2uusjJM5PbwnXbjvpIrsBKPkEF0O6.jpg"
                        alt="my-image" />
                </div>
                <div className="mt-8 xl:mt-0 text-center xl:basis-3/4 xl:pl-10">
                    <p className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold sm:tracking-wide">
                        {`Hey there!👋 I'm Gopal, a Lead Software Engineer who loves to build awesome web apps and drink Coffee.`}
                    </p>
                    <p className="mt-7 xl:mt-10 xl:text-lg text-center text-base tracking-wide ">{`With over 7 years of hands-on expertise in building high-impact web applications at scale, I have helped some big brands build performant user interfaces for their web apps to deliver seamless user experiences. I can help you do the same.`}</p>
                </div>
            </div>
            <div className="mt-12 mx-auto lg:w-[80%] xl:w-[70%] xl:mt-20">
                <div className="grid grid-cols-5 justify-center items-center gap-x-3 gap-y-3 mx-0 sm:gap-x-10 sm:gap-y-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-14 xl:gap-x-14 2xl:mx-28">
                    {logos.map(logo => {
                        return (
                            <figure
                                key={logo.id}
                                className={`flex p-1 rounded-md overflow-hidden ${logo.visibleInDarkMode ? '' : 'dark:bg-gray-100'} transition-transform hover:scale-[1.1]`}
                            >
                                <img className="rounded-md" src={logo.path} alt={logo.title} title={logo.title} />
                            </figure>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
export default Hero;
