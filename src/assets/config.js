const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Parisa",
  middleName: "",
  lastName: "MashinchiGhabel",
  message: " Passionate about creating seamless and engaging web experiences as a frontend developer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/parisamashinchi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/parisa-mashinchi-8a1b2266/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/parisa-mashinchi.jpg"),
  imageSize: 375,
  message:
    "My name is Parisa MashinchiGhabel. Experienced Senior Front End Developer with 8+ years in React. Implemented 10+ successful web, mobile projects leveraging ReactJS. Collaborated with teams of +5 developers to improve major platforms. Proficient in translating design into code, optimizing performance.",
  resume: "https://drive.google.com/file/d/1J4a-KOvPi-aD-HxqFgNwvQJ1cLBAIEMK/view?usp=share_link",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "parisamashinchi", 
  reposLength:1,
  specificRepos: ["e-shop"],
};



const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "Next", value: 90 },
    { name: "Redux", value: 85 },
    { name: "TypeScript", value: 85 },
    { name: "HTML5, CSS3, SCSS, Tailwind css", value: 85 },
    { name: "Bootstrap, Material,Ant design", value: 75 },
    { name: "JavaScript", value: 70 },
    { name: "AngularJs/Angular4", value: 65 },
    { name: "vueJs", value: 30 },
    
  ],
  softSkills: [
    { name: "Problem-Solving", value: 80 },
    { name: "Code Reviews", value: 90 },
    { name: "Continuous Improvement Web", value: 75 },
    { name: "Performance Optimization", value: 85 },
    { name: "Communication Skills", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Front End developer opportunities in Germany! if you just want to say hi, please feel free to email me at",
  email: "parisamashinchi@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Frontend Developer',
      companyName: 'Atlas Group',
      companyLogo: require('../assets/img/atlas.jpg'),
      date: 'Jan 2023 - Mar 2024',
    },
    {
      role: 'Senior Frontend Developer',
      companyName:'Agileful',
      companyLogo: require('../assets/img/agileful-logo.png'),
      date: 'Jul 2021 - Jan 2023',
    },
    {
      role: 'Front-End Developer',
      companyName: 'Amoozal',
      companyLogo: require('../assets/img/logo.png'),
      date: 'Nov 2019 - Jun 2021',
    },
  ]
}



export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
