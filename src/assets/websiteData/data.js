export const data = {
  navbar: {
    contactLinks: [
      {
        id: 1,
        type: 'email',
        value: 'mailto:gopal.chitkara@gmail.com',
      },
      {
        id: 2,
        type: 'linkedin',
        value: 'https://www.linkedin.com/in/gopalchitkara/',
      },
      {
        id: 3,
        type: 'github',
        value: 'https://github.com/gopalchitkara',
      },
    ],
    menuItems: [
      { id: 1, name: 'home', value: 'Home' },
      { id: 2, name: 'work', value: 'Work' },
      { id: 3, name: 'projects', value: 'Projects' },
      { id: 4, name: 'getInTouch', value: 'Get in touch' },
    ],
  },
  heroSection: {
    profilePicture: {
      path: 'src/assets/media/images/my-image.jpg',
      alt: 'gopal-chitkara',
    },
    title: "I'm a Lead Software Engineer who loves to build awesome web apps and drink Coffee.",
    subtitle:
      'With over 7 years of hands-on expertise in building high-impact web applications at scale, I have helped some big brands build performant user interfaces for their web apps to deliver seamless user experiences. I can help you do the same.',
    techStackBanner: {
      path: 'src/assets/media/images/logos.png',
      alt: 'tech-stack',
    },
  },
  contentSection: {
    work: {
      title: 'Previous Work',
      subtitle: 'A brief of my engagements till date.',
      workExperiences: [
        {
          id: 1,
          sequence: 1,
          title: 'Associate Consultant',
          companyName: 'Capgemini',
          imagePath: 'src/assets/media/images/capgemini.jpg',
          startDate: 'Oct 2016',
          endDate: 'Jun 2019',
          location: {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
          },
          summary:
            "Developed projects from scratch for a Belgium-based client to comply with the government's recommendation of a nutrient profiling system for edible products which directly impacted the customer's decision of buying the products and improve sales.",
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
          imagePath: 'src/assets/media/images/mindfire.jpg',
          startDate: 'Aug 2019',
          endDate: 'Nov 2020',
          location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
          },
          summary:
            'Developed user dashboards to import product data into the application ecosystem and provided high-quality fixes for the bugs occurring in the application UI for a US-based client dealing in Eye-care and E-commerce domain.',
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
          imagePath: 'src/assets/media/images/ihs-markit.jpg',
          startDate: 'Nov 2020',
          endDate: 'Dec 2021',
          location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
          },
          summary:
            'Working for a client dealing in Fintech domain and helping them to improve the performance of their website which is used by thousands of customers per hour.',
          achievements: [],
          skillsUsed: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'Project Management', 'Git', 'BitBucket'],
        },
        {
          id: 4,
          sequence: 4,
          title: 'Technical Lead',
          companyName: 'Paytm',
          imagePath: 'src/assets/media/images/paytm.jpg',
          startDate: 'Dec 2021',
          endDate: null,
          location: {
            city: 'Noida',
            state: 'Uttar Pradesh',
            country: 'India',
          },
          summary:
            'Working in the Payment Gateway Team, developing highly scalable Checkout JS Library that enables seamless online payments across desktop and mobile devices. Also building administrative applications used for payment reconciliation by merchants and building micro backends to support Payment Gateway integration at scale.',
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
      ],
    },
    showcaseProjects: {
      title: 'Showcase projects with public code',
      projects: [
        {
          id: 1,
          title: 'Disney+ Clone',
          subtitle: 'Clone of a popular streaming service',
          summary:
            'I built this app to showcase my skills and share my knowledge with a larger audience. The app is built with ReactJS, Redux toolkit, Styled Components, and Mirage JS. The app has a fully working video player with tracking of currently watching content and a watch list.',
          imagePath: 'src/assets/media/images/disney-clone.png',
          appLink: 'https://disneyclone.gopalchitkara.in/',
          repoLink: 'https://github.com/gopalchitkara/disney-plus-hotstar-clone-ui',
          techUsed: ['ReactJS', 'Javascript', 'Redux toolkit', 'Mirage JS', 'Styled Components'],
        },
      ],
    },
  },
  contactSection: {
    title: 'Get in touch',
    contactMessage:
      "I'm always excited to talk about anything frontend and work on some exciting projects. Have a question? message me and let's discuss it over a coffee.",
    cta: {
      type: 'email',
      message: 'Send me an email at',
      email: 'gopal.chitkara@gmail.com',
    },
  },
};
