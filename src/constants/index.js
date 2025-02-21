import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack and Python Developer",
    icon: mobile,
  },
  {
    title: "MERN Full Stack Developer",
    icon: backend,
  },
  {
    title: "Innovative Creator",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Connect Wave Social Media Web Application",
    company_name: "Connect Wave",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed **ConnectWave**, a social media web application using HTML, CSS, JavaScript, Flask, and Python.",
      "Integrated **real-time chat functionality** using **Socket.io**.",
      "Implemented user authentication with **JWT** and **MongoDB** to store user details and messages.",
      "Built a secure platform for users to **upload videos**, share **technology-based achievements**, and connect with others.",
    ],
  },
  {
    title: "Tune Time Music App",
    company_name: "Tune Time Music App",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed **TuneTime**, a music streaming web application using the **MERN stack**.",
      "Implemented **real-time messaging** features with **Socket.io**.",
      "Used **Stripe** for secure **payments** and integrated **Clerk Auth** for authentication.",
      "Designed and built a sleek and **responsive UI** using **React.js** and **Tailwind CSS**.",
    ],
  },
  {
    title: "PurePattry Web Application",
    company_name: "PurePattry Web Application",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed **PurePattry**, a food ordering application using the **MERN stack**.",
      "Integrated **Stripe** for payment processing and **Auth0** for secure authentication.",
      "Used **MongoDB** to store user data, menu items, and orders.",
      "Implemented **TypeScript** and **ShadCN** for a modern and responsive UI.",
    ],
  },
  {
    title: "Chatter Time",
    company_name: "Chatter Time",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed **ChatterTime**, a real-time messaging web app using the **MERN stack**.",
      "Implemented **JWT-based manual authentication** for user security and stored data in **MongoDB**.",
      "Built a fast, responsive chat system using **Socket.io** for real-time communication.",
      "Focused on **scalable architecture** and enhanced user experience with **React.js**.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tejesh amazed us with ChatterTime—a real-time chat app built with the MERN stack. It's fast, secure, and beautifully designed, making instant messaging seamless.",
    name: "Tharun",
    designation: "Student",
    company: "B.pharmacy ,Social Media user",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
  
  {
    testimonial:
      "Tejesh not only builds great websites but also creates innovative platforms like TuneTime—a next-gen music streaming app with AI-driven recommendations and offline support.",
    name: "Kavya Sree",
    designation: "Student",
    company: "BSC,nursing ,Music Lover",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. Their expertise also shines in platforms like PurePattry—an advanced food ordering system with real-time tracking and secure payments.",
    name: "Eshwari Mam",
    designation: "M.tech",
    company: "Engineering Proffeser",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

const projects = [
  {
    name: "ChatterTime - Real-Time Chat App",
    description:
      "ChatterTime is a powerful real-time chat application built using the MERN stack. It enables users to engage in instant messaging, connect with friends, and have seamless real-time conversations with a responsive and modern user interface. The app is powered by WebSockets and Socket.io, ensuring instant message delivery without delays. It features JWT-based authentication for secure logins and session management. Additionally, user data, chat history, and multimedia files are stored securely in MongoDB, providing a scalable and efficient data management solution.",
    tags: [
      {
        name: "MERN STUCK",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs,nodejs,javascript,",
        color: "green-text-gradient",
      },
      {
        name: "tailwind,mongodb,jwt auth",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with actual image
    source_code_link: "https://github.com/Tejash12345/chatterTime_app-.git", // Add actual repo link
  },
  {
    name: "PurePattry Food Ordering",
    description:
      "PurePattry is an advanced online food ordering platform designed to provide a seamless user experience. Customers can browse various restaurant menus, customize their orders, and make secure payments through multiple payment gateways. The platform offers real-time order tracking, allowing users to monitor the status of their deliveries. Built with React and RESTful APIs, it ensures smooth performance and scalability. User authentication and authorization are integrated using modern security protocols, ensuring safe transactions. The admin panel allows restaurant owners to manage menus, orders, and delivery logistics efficiently.",
    tags: [
      {
        name: "MERN STUCK",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs TypeScript, Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Stripe for Payments,Shadcn, Auth0",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with actual image
    source_code_link: "https://github.com/Tejash12345/project_purepattry.git",
  },
  {
    name: "TuneTime Music App",
    description:
      "TuneTime is a next-generation music streaming platform that offers users access to a vast library of high-quality songs. The app allows users to create and manage playlists, discover trending tracks, and enjoy a personalized music experience through AI-driven recommendations. TuneTime supports offline downloads, ensuring users can listen to their favorite songs without an internet connection. Built with Next.js and Supabase, the app guarantees smooth performance and real-time updates. The user-friendly interface and powerful backend make TuneTime a must-have for music lovers.",
    tags: [
      {
        name: "Mern Stuck",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs,nodejs,javascript(jsx),",
        color: "green-text-gradient",
      },
      {
        name: "mongodb,clerk Auth,Cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with actual image
    source_code_link: "https://github.com/Tejash12345/TuneTimemusic1.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
