import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DSA Problem Setter"
            subTitle="QuizCred - (Jul'25-Aug'25)"
            des="Designed and created a broad spectrum of original Data Structures and Algorithms (DSA) problems, covering topics such as arrays, graphs, dynamic programming, trees, and advanced algorithmic techniques. Each problem was crafted with clear constraints, edge-case considerations, and optimal solutions to ensure both conceptual depth and practical relevance for learners preparing for coding interviews and competitive programming."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
