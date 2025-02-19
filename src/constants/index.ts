import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  docker,
  express,
  postgreSQL,
  redis,
  azure,
  jenkins,
  mssql,
  space,
  selfimg,
  spotlight,
  wall,
  reactjs,
  circularText,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    // icon: backend1,
  },
];

const images = {
  selfimg: selfimg,
  spotlight: spotlight,
  wall: wall,
  space: space,
};

const technologies = {
  frontend: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
  ],
  backend: [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express",
      icon: express,
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "MS_SQL",
      icon: mssql,
    },
  ],
  versionControl: [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Azure",
      icon: azure,
    },
  ],
  cicd: [
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
  ],
};

const experiences = [
  {
    count: "01",
    designation: "Software Developer",
    company: "54e Dev Studios",
    color: "no color",
    location: "Regina, SK",
    tenure: "June 2022 - June 2024",
    points: [
      "Integrated new mobile gaming app specific features while optimizing existing code structure through custom hooks, resulting in a 30% improvement in page rendering speed and smoother navigation between pages.",
      "Developed complex game animations using React Native Reanimated and leveraged Skia to create high-performance graphics, delivering smooth and visually appealing animations that enhanced user engagement and visual appeal.",
      "Provided application support and maintenance with routine upgrades, error handling and code reviews to ensure a smooth user experience while monitoring Discord channels for user feedback and updates, resulting in a 25% increase in new user retention.",
      "Designed and built an intuitive web-based management dashboard for the internal  support team providing clear insights, support metrics and facilitating quick decision-making.",
    ],
  },
  {
    count: "02",
    designation: "Technology Analyst",
    company: "Infosys Limited",
    color: "rgba(70,128,129,255)",
    location: "Pune, India",
    tenure: "December 2018 - December 2021",
    points: [
      "Developed and customized the Finacle application front end using React.js, leveraging the FEBA (Finacle E-Banking System) framework and utilized Bootstrap to enhance the user interface and create a responsive design.",
      "Collaborated with system designers, business analysts, and the in-house testing team during business requirements reviews at the client location, which facilitated the rapid delivery of critical bug fixes and new feature requirements.",
      "Designed and developed a mobile app for a leading sports tournament organization that delivered real-time match insights and notifications.",
      "Integrated the Brightcove video player into the app to provide seamless streaming of live matches and on-demand video content, enhancing user experience during peak match times with the capability to handle up to one million concurrent viewers.",
      "Provided continuous improvement and support post-launch, addressed user feedback and implemented enhancements as required.",
    ],
  },
  {
    count: "03",
    designation: "Associate Consultant",
    company: "Capgemini Ltd",
    color: "rgb(111, 142, 153)",
    location: "Pune, India",
    tenure: "October 2017 - December 2018",
    points: [
      "Developed and maintained HSBC's internal web application based on wireframes using React.js to enhance user experience and streamline access to critical information. Implemented Node.js end points to facilitate calls to MuleSoft APIs, ensuring seamless integration between front-end and back-end services using Axios calls.",
      "Conducted test driven development using Jest and Enzyme for test automation achieving 85% coverage and reducing regression bug incidents.",
      "Performed comprehensive technical documentation in Confluence post-sprint planning, participating in key ceremonies, outlining estimated timelines and priorities, and allotted tasks based on leveraging individual strengths within the team.",
    ],
  },
  {
    count: "04",
    designation: "Web Developer",
    company: "SoftLink Global Ltd",
    color: "rgb(117, 132, 106)",
    location: "Mumbai, India",
    tenure: "October 2015 - October 2017",
    points: [
      "Pioneered the adoption of React in the company transforming legacy ASP.NET interfaces into React JS for optimized performance, leading to a 50% improvement in responsiveness and reduced page load times.",
      "Developed React and Redux skeleton units and reusable components, and maintained a comprehensive SharePoint site documenting industry trends, core principles and best coding practices to improve framework familiarity and thus  expediting transition process.",
      "Coordinated and mentored developers with detailed presentations on React to enhance project collaboration and facilitated team alignment on migration efforts.",
    ],
  },
  {
    count: "05",
    designation: "Apprentice Web Developer",
    company: "Lionbridge Technologies Inc",
    color: "rgba(142, 117, 81)",
    location: "Mumbai, India",
    tenure: "May 2013 - August 2014",
    points: [
      "Implemented interactive learning courses and responsive UI pages using HTML5, CSS, JavaScript, and jQuery, while leveraging ASP.NET Web Forms, LINQ, and Entity Framework for back-end database access.",
      "Integrated interactive multimedia elements and gamification features into e-learning modules, resulting in a 30% increase in user engagement and course completion rates, while maintaining optimal performance across various browsers.",
      "Implemented comprehensive accessibility features, including advanced keyboard navigation and screen reader optimization, adhering to WCAG 2.1 AA standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const skills = [
  {
    skill: "react",
    image: reactjs,
  },
  {
    skill: "typeScript",
    image: typescript,
  },
  {
    skill: "nodejs",
    image: nodejs,
  },
  {
    skill: "mongodb",
    image: mongodb,
  },
];

const circular = circularText;

export {
  services,
  technologies,
  experiences,
  testimonials,
  images,
  skills,
  circular,
};
