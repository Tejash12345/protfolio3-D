import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My name is Arava Tejesh Kumar, and I am currently pursuing my BTech in Electronics and Communication Engineering from Narasaraopet Institute of Technology, with a CGPA of 7.2. Throughout my academic journey, I have gained practical experience through various projects, one of the most significant being "PurePattry", a fully functional food ordering app built using React.js, TypeScript, MongoDB, and Node.js, with payment integration via Stripe. Additionally, I integrated AWS services for deployment and scalability, which enhanced my cloud computing skills and strengthened my expertise in full-stack development.

        In addition to my academic projects, I have completed three internships in full-stack web development, cybersecurity, and the Internet of Things (IoT), which provided me with hands-on experience working with real-world technologies. I am particularly passionate about learning new technologies, especially in the field of AI. Beyond academics, I enjoy playing cricket and listening to music. Recently, I led a team of six in developing a full-stack web application for a competition, and we emerged as winners. This experience significantly improved my leadership and teamwork abilities.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
