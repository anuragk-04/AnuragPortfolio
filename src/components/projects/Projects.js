import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Perfect centering */}
      <div className="w-full flex justify-center">
        <div className="
          flex justify-center items-center gap-20
          max-w-4xl
        ">
          <ProjectsCard
            title="Collab"
            des="A real-time collaborative platform featuring room-based sessions with interactive whiteboards, live code editing and integrated chat room."
            src={projectOne}
            githubLink="https://github.com/anuragk-04/Collab"
            liveLink="https://dapper-lamingt.netlify.app/"
          />

          <ProjectsCard
            title="SimiliCode"
            des="SimiliCode is an AST based full-stack plagiarism detection tool for JavaScript codebases to detect structural code similarities."
            src={projectTwo}
            githubLink="https://github.com/anuragk-04/SimiliCode"
            liveLink="https://jade-mooncake-3dc735.netlify.app/"
          />
        </div>
      </div>

    </section>
  );
}

export default Projects;
