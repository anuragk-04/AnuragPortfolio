import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// renamed the component to Education
// This component displays education and job experience in two sections: Education Quality and Job Experience.
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2016</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelors of Technology"
            subTitle="Motilal Nehru National Institute of Technology Allahabad (2022-2026)"
            result="7.38/10"
            des="Throughout my Bachelor of Technology (B.Tech), I developed a strong foundation in core engineering principles, problem-solving, and practical application of technology. The program combined intensive technical coursework with hands-on projects, enabling me to build real-world solutions, understand system workflows, and apply analytical thinking to complex challenges. It also helped me cultivate a passion for innovation, teamwork, and continuous learning in a rapidly evolving tech environment."
          />
          <ResumeCard
            title="Class 12"
            subTitle="Theosophical Inter college, Etawah (2020)"
            result="95%"
            des="In Class 12, I pursued the Science stream with Physics, Chemistry, and Mathematics (PCM), which strengthened my analytical thinking and problem-solving abilities. The rigorous curriculum helped me build a solid foundation in mathematical reasoning, logical analysis, and scientific concepts—skills that now support my approach to software development and technology. This background also cultivated discipline, curiosity, and a strong technical mindset that continues to shape my learning and professional growth."
          />
          <ResumeCard
            title="Class 10"
            subTitle="Theosophical Inter college, Etawah (2018)"
            result="87%"
            des="I completed my Class 10 with a strong academic foundation, developing essential skills in discipline, communication, and conceptual understanding across core subjects. This stage strengthened my work ethic, curiosity, and ability to learn consistently—qualities that have supported my growth throughout higher studies and my journey into technology."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern secondary teacher"
            subTitle="St. Martins Maikuu"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management and lesson planning."
          />
           <ResumeCard
            title="Web Developer & Trainer"
            subTitle="PLP Academy (2024 - 2025)"
            result="KENYA"
            des="As a Web Developer & Trainer at PLP Academy, I honed my skills in web development and training methodologies."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="KENYA"
            des="As a Front-end Developer at Nike, I contributed to the design and development of user-friendly interfaces for their e-commerce platform."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education
