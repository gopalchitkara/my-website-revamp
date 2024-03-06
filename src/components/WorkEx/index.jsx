const workExperiences = [
    {
        id: 1,
        sequence: 1,
        title: 'Associate Consultant',
        companyName: 'Capgemini',
        imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/capgemini-qmvlyYgpIomkjP6ZWpPG7PjVRiyytv.jpg',
        startDate: 'Oct 2016',
        endDate: 'Jun 2019',
        location: {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
        },
        summary:
            ["Developed projects from scratch for a Belgium-based client to comply with the government's recommendation of a nutrient profiling system for edible products which directly impacted the customer's decision of buying the products and improve sales."],
        achievements: [
            'Invited by the Client to onshore delivery center in Belgium to deploy a project which improved sales of 1700+ products sold by Ahold Delhaize in the whole of Belgium',
        ],
        skillsUsed: ['HTML', 'CSS', 'Javascript', 'ASP.Net MVC', 'SQL Server', 'Project Management', 'Python'],
    },
    {
        id: 2,
        sequence: 2,
        title: 'Sr. Software Engineer',
        companyName: 'Mindfire Solutions',
        imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/mindfire-XNqjUihHnZh7w1yJHAZ9QVD8Gyh6iQ.jpg',
        startDate: 'Aug 2019',
        endDate: 'Nov 2020',
        location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
        },
        summary:
            ['Developed user dashboards to import product data into the application ecosystem and provided high-quality fixes for the bugs occurring in the application UI for a US-based client dealing in Eye-care and E-commerce domain.'],
        achievements: [
            'Presented a Tech Talk on the organization level on how to make Serverless Applications using AWS',
        ],
        skillsUsed: ['React', 'Redux', 'HTML', 'CSS', 'Javascript', 'SASS', 'Git', 'Github'],
    },
    {
        id: 3,
        sequence: 3,
        title: 'Associate Software Engineer',
        companyName: 'IHS Markit',
        imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/ihs-markit-MmahCRXghXa2OBgHmaGoFNuqEDuJZc.jpg',
        startDate: 'Nov 2020',
        endDate: 'Dec 2021',
        location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
        },
        summary:
            ['Working for a client dealing in Fintech domain and helping them to improve the performance of their website which is used by thousands of customers per hour.'],
        achievements: [],
        skillsUsed: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'Project Management', 'Git', 'BitBucket'],
    },
    {
        id: 4,
        sequence: 4,
        title: 'Technical Lead',
        companyName: 'Paytm',
        imagePath: 'https://yfcw5mw4lrkav48z.public.blob.vercel-storage.com/portfolio/paytm-fGl4uxuO2wL1ma0ZlCYIiC1XzI187f.jpg',
        startDate: 'Dec 2021',
        endDate: null,
        location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
        },
        summary:
            ['Working in the Payment Gateway Team, developing highly scalable Checkout JS Library that enables seamless online payments across desktop and mobile devices.',
                'Also building administrative applications used for payment reconciliation by merchants and building micro backends to support Payment Gateway integration at scale.'],
        achievements: [],
        skillsUsed: [
            'React JS',
            'Redux',
            'Hooks',
            'Javascript',
            'HTML',
            'CSS',
            'NodeJS',
            'Git',
            'Webpack',
            'Jest',
            'Enzyme',
        ],
    },
];

function WorkEx() {
    return (
        <section id="work" className="mt-8 pt-8 xl:mt-16">
            <div className=" text-center text-3xl xl:text-4xl font-extrabold tracking-wide">
                {`Previous Work`}
            </div>
            <div className="text-center font-medium text-gray-700 dark:text-gray-300 xl:text-lg xl:mt-1">{`A brief of my engagements till date.`}</div>
            <div className="mt-5 xl:mt-10">
                {workExperiences
                    .sort((a, b) => b.sequence - a.sequence)
                    .map((experience) => {
                        return (
                            <div
                                key={experience.id}
                                className="border-b py-5 last:border-none xl:py-8"
                            >
                                <div className="flex flex-row items-center">
                                    <div className="">
                                        <img
                                            className="h-16 w-16 rounded-md"
                                            src={experience?.imagePath}
                                            alt={experience?.companyName} />
                                    </div>
                                    <div className="pl-2 xl:pl-4">
                                        <div className="text-xl xl:text-2xl font-bold">{experience?.companyName}</div>
                                        <div className="text-sm xl:text-base text-gray-500 dark:text-gray-200">
                                            <span className="font-medium">{experience?.title}</span><span>{` / Full Time`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-base mt-4 tracking-wide xl:text-lg">
                                    {experience.summary.map(summ => {
                                        return (
                                            <div key={Math.random()}>
                                                {summ}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4">
                                    {experience.skillsUsed.map(skill => {
                                        return (
                                            <div
                                                key={Math.random()}
                                                className="bg-gray-200 dark:text-gray-900 px-2 py-[2px] rounded text-sm text-nowrap font-medium"
                                            >
                                                {skill}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}
export default WorkEx;
