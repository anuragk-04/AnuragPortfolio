import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// This component displays achievements in two sections: Company Experience and Job Experience.
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* Company Experience Section */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p> */}
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Each ResumeCard represents a specific achievement or project. */}
          <ResumeCard
            title="Specialist @ Codeforces"
            subTitle="username: anurag04_"
            des="I am a Specialist on Codeforces with a max rating of 1436, reflecting my strong problem-solving skills and consistency in competitive programming. Over time, I’ve solved 450+ problems across diverse topics, including data structures, algorithms, math, and constructive logic. My journey on the platform has helped me sharpen my analytical thinking, improve coding efficiency, and handle time-pressured challenges effectively."
          />
          <ResumeCard
            title="3-start at Codechef"
            subTitle="username- anuragk_04"
            des="I am a 3-Star rated coder on CodeChef with a max rating of 1640, demonstrating strong algorithmic thinking and competitive programming proficiency. My participation in long challenges, cook-offs, and starters has helped me refine my speed, accuracy, and ability to solve diverse problems under constraints."
          />
          <ResumeCard
            title="Top Ranks in Contests"
            des="Ranked 137 in CodeChef Starters Round 157 and 
            1377 in Codeforces Round 986 (div2) among 
            18000+ global participants."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
