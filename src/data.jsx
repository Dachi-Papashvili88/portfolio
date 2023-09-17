import { nanoid } from "nanoid";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: (
      <img
        className="h-16 w-16"
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
        alt="HTML5"
      />
    ),
  },

  {
    id: nanoid(),
    title: "CSS",
    icon: (
      <img
        className="h-16 w-16"
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
        alt="CSS3"
      />
    ),
  },

  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <img
        className="h-16 w-16"
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
        alt="JavaScript"
      />
    ),
  },
  {
    id: nanoid(),
    title: "React",
    icon: (
      <img
        className="h-16 w-16"
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
        alt="React"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: (
      <img
        className="h-16 w-16"
        src="https://www.tomaslukes.com/assets/images/icons/tech/tailwindcss-colored.svg"
        alt="Tailwind CSS"
      />
    ),
  },

  {
    id: nanoid(),
    title: "Vite",
    icon: (
      <img
        className="h-16 w-16"
        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
        alt="Vite"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: 
      <img
        className="h-16 w-16"
        src="https://www.tomaslukes.com/assets/images/icons/tech/firebase-colored.svg"
        alt="Firebase"
      />
    ,
  },
  {
    id: nanoid(),
    title: "Git",
    icon: 
    <img
    className="h-16 w-16"
    src="https://www.tomaslukes.com/assets/images/icons/tech/git-colored.svg"
    alt="Firebase"
  />
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/assets/project1.jpg",
    url: "https://addtocart-dp.netlify.app//",
    github: "https://github.com/Dachi-Papashvili88/add-to-cart",
    title: "add to cart",
    text: "Click Live to check the project.",
  },
  {
    id: nanoid(),
    img: "/assets/project2.jpg",
    url: "https://pizza-ordering-app-dp.netlify.app/",
    github: "https://github.com/Dachi-Papashvili88/restaurant-ordering-app",
    title: "Restaurant Ordering App",
    text: "Click Live to check the project",
  },
  {
    id: nanoid(),
    img: "/assets/project3.jpg",
    url: "https://tenzis-game-dp.netlify.app/",
    github: "https://github.com/Dachi-Papashvili88/Tenzies-Game",
    title: "Tenzis Game",
    text: "Click Live to check the project Project",
  },
];
