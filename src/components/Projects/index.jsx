const showcaseProjects = [
    // {
    //     id: 1,
    //     sequence: 1,
    //     title: 'Lunr Wallet',
    //     subtitle: 'Clone of a popular streaming service',
    //     summary:
    //         'I built this app to showcase my skills and share my knowledge with a larger audience. The app is built with ReactJS, Redux toolkit, Styled Components, and Mirage JS. The app has a fully working video player with tracking of currently watching content and a watch list.',
    //     imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/disney-clone-0sjelR2dkbRHTRnQUAw0v8NX7JzEWZ.PNG',
    //     appLink: 'https://disneyclone.gopalchitkara.in/',
    //     repoLink: 'https://github.com/gopalchitkara/disney-plus-hotstar-clone-ui',
    //     skills: ['ReactJS', 'Javascript', 'Redux toolkit', 'Mirage JS', 'Styled Components'],
    // },
    {
        id: 2,
        sequence: 2,
        title: 'Disney+ Clone',
        subtitle: 'Clone of a popular streaming service',
        summary:
            'I built this app to showcase my skills and share my knowledge with a larger audience. The app is built with ReactJS, Redux toolkit, Styled Components, and Mirage JS. The app has a fully working video player with tracking of currently watching content and a watch list.',
        imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/disney-clone-0sjelR2dkbRHTRnQUAw0v8NX7JzEWZ.PNG   ',
        appLink: 'https://disneyclone.gopalchitkara.in/',
        repoLink: 'https://github.com/gopalchitkara/disney-plus-hotstar-clone-ui',
        skills: ['ReactJS', 'Javascript', 'Redux toolkit', 'Mirage JS', 'Styled Components'],
    },
];

function Projects() {
    return (
        <section id="projects" className="mt-8 pt-8 xl:mt-12">
            <div className="text-center text-3xl xl:text-4xl font-extrabold tracking-wide">
                <span className="block md:inline">Showcase projects</span>
                <span className="hidden md:inline">&nbsp;</span>
                <span className="block md:inline">with public code</span>
            </div>
            {showcaseProjects
                .sort((a, b) => b.sequence - a.sequence)
                .map((project) => {
                    return (
                        <div key={project.id} className="mt-10 xl:mt-16">
                            <div className="text-2xl xl:text-3xl font-bold tracking-wide">{project.title}</div>
                            <div className="text-base xl:text-lg font-medium text-gray-700 dark:text-gray-200">{project.subtitle}</div>
                            <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4 mb-2">
                                {project.skills.map(skill => {
                                    return (
                                        <div
                                            key={Math.random()}
                                            className="bg-gray-200 dark:text-gray-900 px-2 py-[2px] rounded text-sm text-nowrap font-medium"
                                        >{skill}</div>
                                    )
                                })}
                            </div>
                            <div className="mt-6">
                                <a href={project.appLink} target="_blank">
                                    <img src={project.imagePath} alt={project.title} />
                                </a>
                            </div>
                            <div className="text-base xl:text-lg mt-4 tracking-wide">{project.summary}</div>
                            <div className="my-4 lg:my-8 xl:my-10 flex flex-row flex-wrap gap-2">
                                <a
                                    href={project.appLink}
                                    target="_blank"
                                    className="flex items-center justify-center px-4 py-2 border-blue-600 rounded bg-blue-600 text-white text-sm font-semibold tracking-wide hover:border-blue-500 hover:bg-blue-500 cursor-pointer transition-all h-10 select-none hover:scale-[1.05]"
                                >Try the app</a>
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    className="flex items-center justify-center px-4 py-2 border-gray-300 dark:border-gray-100 dark:hover:border-gray-50 rounded bg-gray-300 dark:bg-gray-100 text-black text-sm  tracking-wide hover:border-gray-200 dark:hover:bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all h-10 select-none hover:scale-[1.05]"
                                >
                                    {`View code repository`}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                        className="h-4 w-4 ml-2"
                                    >
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}
export default Projects;
