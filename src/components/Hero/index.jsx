function Hero() {
    return (
        <section
            id="home"
            className="pt-5 "
        >
            <div className="flex flex-col lg:mt-10 xl:flex-row xl:mt-20 ">
                <div className="flex items-center justify-center basis-1/4">
                    <img
                        className="h-48 w-48 rounded-full"
                        src="https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/my-image-a2uusjJM5PbwnXbjvpIrsBKPkEF0O6.jpg"
                        alt="my-image" />
                </div>
                <div className="mt-8 text-center xl:basis-3/4 xl:pl-10">
                    <p className="text-3xl xl:text-4xl font-bold tracking-wide">
                        {`I'm a Lead Software Engineer who loves to build awesome web apps and drink Coffee.`}
                    </p>
                    <p className="mt-7 xl:text-lg text-center text-base tracking-wide ">{`With over 7 years of hands-on expertise in building high-impact web applications at scale, I have helped some big brands build performant user interfaces for their web apps to deliver seamless user experiences. I can help you do the same.`}</p>
                </div>
            </div>
            <div className="mt-12 mx-auto lg:w-[80%] xl:w-[70%] xl:mt-20">
                <img src="https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/logos-65my5hyStAqLjR6x5CKdk5SDNTh23i.png" alt="technologies" />
            </div>
        </section>
    );
}
export default Hero;
