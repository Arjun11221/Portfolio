import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 months of hands-on experience, I have honed my skills in front-end technologies like React, Redux and Tailwind, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Redux, Node.js, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work BTS, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Apr 2024 - Present",
    role: "MERN Stack Trainer",
    company: "Nics Technology Pvt. Ltd",
    description: `Conduct training sessions, workshops, and presentations either in-person or virtually. This may 
    involve explaining complex technical concepts in a clear and understandable manner, using appropriate teaching 
    methods and tools.
    `,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Nodejs"],
  },
  {
    year: "Jan 2024 - Apr 2024",
    role: "Web developer Intern",
    company: "Orangus India Pvt. Ltd",
    description: `Worked in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  

];

export const EDUCATION = [
  {
    year: "Dec-2022 – Jan 2024",
    role: " Full-Stack Web Development",
    company: "TechStack Academy",
    location: `New Delhi`,
  },
  {
    year: "Aug-2021 – Present",
    role: "Bachelor of Science",
    company: "Indira Gandhi National Open University",
    location: `New Delhi`,
  },

  {
    year: "July 2021",
    role: "12th | CBSE Board, New Delhi ",
    company: "Govt. Boys Sr. Sec School",
    location: `Khajoori Khass, Delhi`,
  },

  {
    year: "May 2019",
    role: "10th | CBSE Board, New Delhi ",
    company: "Govt. Boys Sr. Sec School",
    location: `Khajoori Khass, Delhi`,
  },
  

];

export const PROJECTS = [
  {
    title: "Movix Website",
    image: project1,
    description: " This project is Full responsive and fetch real time data from TMDB API where user can Sign up/Login and watch Movies."
      ,
      liveLink : `https://mmovix.netlify.app/`,
    technologies: ["HTML", "TailwindCSS", "React", "Redux" , "Firebase"],
  },
  {
    title: "MyTube Website",
    image: project2,
    description:
      "This project is Full responsive and fetch real time data from Youtube API where user can watch the Youtube videos and talk in live chat with Dark/Light theme feature as well.",
      liveLink : `https://myoutubeapp.netlify.app`,
    technologies: ["HTML", "TailwindCSS", "React", "Redux", "Debouncing"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      liveLink : `https://minfolio.netlify.app`,
    technologies: ["HTML", "TailwindCSS", "React"],
  },

];

export const CONTACT = {
  address: "Delhi NCR ",
  phoneNo: "8851825992",
  email: "arjun346002@gmail.com",
};
