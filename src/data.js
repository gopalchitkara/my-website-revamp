
const workExperiences = [
    {
        id: 3,
        title: "Associate Software Engineer",
        companyName: "IHS Markit",
        imagePath: "/media/images/ihs-markit.jpg",
        startDate: "Dec 2020",
        currentWorking: true,
        endDate: "",
        location: {
            city: "Noida",
            state: "Uttar Pradesh",
            country: "India"
        },
        summary: "Working for a client dealing in Fintech domain and helping them to improve the performance of their website which is used by thousands of customers per hour.",
        skillsUsed: ["HTML", "CSS", "JavaScript", "AJAX", "Project Management", "Git", "BitBucket"]
    },
    {
        id: 2,
        title: "Sr. Software Engineer",
        companyName: "Mindfire Solutions",
        imagePath: "/media/images/mindfire.jpg",
        startDate: "Aug 2019",
        currentWorking: false,
        endDate: "Nov 2020",
        location: {
            city: "Noida",
            state: "Uttar Pradesh",
            country: "India"
        },
        summary: "Developed user dashboards to import product data into the application ecosystem and provided high quality fixes for the bugs occuring in the application UI for a US based client dealing in Eye-care and Ecommerce domain.",
        achievements: ["Presented a Tech Talk on the organization level on how to make Serverless Applications using AWS"],
        skillsUsed: ["React", "Redux", "HTML", "CSS", "Javascript", "SASS", "Git", "Github"]
    },
    {
        id: 1,
        title: "Associate Consultant",
        companyName: "Capgemini",
        imagePath: "/media/images/capgemini.jpg",
        startDate: "Oct 2016",
        currentWorking: false,
        endDate: "Jun 2019",
        location: {
            city: "Mumbai",
            state: "Maharashtra",
            country: "India"
        },
        summary: "Developed projects from scratch for a Belgium based client to comply with the government's recommendation of a nutrient profiling system for edible products which directly impacted the customer's decision of buying the products and improve sales.",
        achievements: ["Invited by the Client to onshore delivery center in Belgium to deploy a project which had an effect on 1700+ products sold by Ahold Delhaize in the whole of Belgium"],
        skillsUsed: ["HTML", "CSS", "Javascript", "ASP.Net MVC", "SQL Server", "Project Management", "Python"]
    }
]

const projects = [
    {
        id: 1,
        title: "Disney+ Clone",
        subtitle: "A clone of a popular streaming srevice",
        summary: "I built this app to showcase my skills and share my knowledge with the larger audience. The app is built with ReactJS, Redux toolkit, Styled Components, and Mirage JS. The app has a fully working video player with tracking of currently watching content and a watchlist.",
        imagePath: "/media/images/disney-clone.png",
        appLink: "https://disneyclone.gopalchitkara.in/",
        repoLink: "https://github.com/gopalchitkara/disney-plus-hotstar-clone-ui",
        tech: ["ReactJS", "Javascript", "Redux toolkit", "Mirage JS", "Styled Components"]
    },
    {
        id: 2,
        title: "Reactor Builder",
        subtitle: "A powertool to speedup ReactJS development",
        summary: "Reactor helps to plan and build react applications in just few minutes. You can intuitively set up your app's environment variables, the component and folder structure and then simply run an auto-generated script to set up the application on your system.",
        imagePath: "/media/images/reactor.png",
        appLink: "https://reactor.gopalchitkara.in/",
        repoLink: null,
        tech: ["ReactJS", "Ant Design", "HTML", "CSS", "JavaScript"]
    }
]

export { workExperiences, projects };