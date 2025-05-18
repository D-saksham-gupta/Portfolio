// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import chikanstop from "./assets/logo2.jpg";

import aktulogo from "./assets/education_logo/aktulogo.png";
import gnpslogo from "./assets/education_logo/gnpslogo.png";

// Project Section Logo's
import csewa from "./assets/work_logo/proj1.jpg";
import togatherlogo from "./assets/work_logo/proj2.jpg";
import secondbrainlogo from "./assets/work_logo/proj3.jpg";
import ecomlogo from "./assets/work_logo/proj4.jpg";
import cblogo from "./assets/work_logo/proj5.jpg";
import amazonlogo from "./assets/work_logo/proj6.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: chikanstop,
    role: "Fullstack Developer",
    company: "Chikan Stop",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable full fledged ecommerce store with scalable multi-usable Dashboard using the NextJs, handled both frontend and backend development.",
    skills: ["Next JS", "TypeScript", "Tailwind CSS", "PostgreSql", "Zustand"],
  },
];

export const education = [
  {
    id: 0,
    img: aktulogo,
    school: "Dr. A.P.J. Abdul Kalam Technical University Lucknow, India",
    date: "Sept 2021 - July 2025",
    grade: "7.56 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science from Babu Banarasi Das National Institute of Technology and Management affiliated from (AKTU), Lucknow. During my college time at BBDNITM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Computer Networks, Operating System and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
    degree: "Bachelor's of Technology in Computer Science",
  },

  {
    id: 1,
    img: gnpslogo,
    school: "Guru Nanak Public School, Kanpur, India",
    date: "Apr 2019 - March 2020",
    grade: "83%",
    desc: "I have completed my class 12th from Guru Nanak Public School, under the CBSE board, where I studied Physics, Chemistry and Mathematics (PCM) with Informatics Pratices.",
    degree: "CBSE(XII) - Science",
  },
  {
    id: 2,
    img: gnpslogo,
    school: "Guru Nanak Public School, Kanpur, India",
    date: "Apr 2017 - March 2018",
    grade: "83.6%",
    desc: "I have completed my class 10th education from Guru Nanak Public School, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ecommerce Website - ChikanStop",
    description:
      "A modern full-stack e-commerce platform built with Next.js and Tailwind CSS, featuring Cloudinary integration for image uploads and a robust backend using Prisma and PostgreSQL. The website supports product listing by categories, sizes, and colors...",
    image: ecomlogo,
    tags: [
      "NextJs",
      "TailwindCSS",
      "Typescript",
      "PostgreSql",
      "Prisma",
      "Stripe",
      "Shadcn UI",
    ],
    github: "https://github.com/",
    webapp: "",
  },
  {
    id: 1,
    title: "CollabBoard - A collaborative Drawing Board",
    description:
      "CollabBoard is a real-time collaborative whiteboard application built with Next.js, Tailwind CSS, Node.js, WebSockets, PostgreSQL, and Prisma. It allows multiple users to draw, write, and interact simultaneously on a shared canvas. Built using Turborepo for monorepo support and optimized performance, the app supports live sync of drawings across clients, persistent storage of board data, and a smooth, intuitive UI for teamwork and brainstorming.",
    image: cblogo,
    tags: [
      "NextJS",
      "Node.js",
      "PostgreSql",
      "Expressjs",
      "TailwindCSS",
      "Typescript",
      "Websockets",
    ],
    github: "https://github.com/D-saksham-gupta/CollabBoard",
    webapp: "",
  },
  {
    id: 2,
    title: "Second Brain - A note-taking app",
    description:
      "Second Brain is a personal knowledge management (PKM) tool designed to help users capture, organize, and retrieve their thoughts and ideas efficiently. Inspired by the PARA and Zettelkasten methods, it allows users to take notes, link related ideas, and structure their knowledge in a connected, searchable system. Built using modern web technologies, Second Brain aims to serve as a digital extension of the human brain—ideal for students, professionals, and creators managing complex information workflows.",
    image: secondbrainlogo,
    tags: [
      "React JS",
      "API",
      "Tailwind CSS",
      "Typescript",
      "PostgreSql",
      "Prisma",
    ],
    github: "https://github.com/D-saksham-gupta/SecondBrain-FE",
    webapp: "https://secondbrain-fe.onrender.com/",
  },
  {
    id: 3,
    title: "Real-time Chatting Application - Together",
    description:
      "The Chatting App is a real-time messaging platform that enables users to communicate instantly through chats. Built using WebSockets for live communication, it features user authentication, message persistence.",
    image: togatherlogo,
    tags: ["React JS", "Node.js", "MongoDB", "Expressjs", "Socket.io"],
    github: "https://github.com/D-saksham-gupta/ToGather-MERN-CHAT-APP-",
    webapp: "https://togatherfe.onrender.com/",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking App",
    description:
      "Developed a robust and an end-to-end solution for booking doctor’s appointment.Implemented JWT based authentication for secure and smooth login and signup. Build simple and responsive UI to increase user experience by 40% and boost appointment booking rates by 30%. Implemented an admin dashboard and RBAC (Role based access control) allowing admins to manage,approve and block users or doctors accounts which ultimately decrease the fake doctors rate by 50%.",
    image: csewa,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "AntD"],
    github: "https://github.com/D-saksham-gupta/Chikitsa-Sewa",
    webapp: "https://chikitsasewafe.onrender.com/",
  },
  {
    id: 5,
    title: "Amazon Landing Page Clone",
    description: "Clone of Amazon's Ecommerce Landing Page",
    image: amazonlogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/D-saksham-gupta/Amazon-clone",
    webapp: "",
  },
];
