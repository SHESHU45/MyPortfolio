import React from "react";
import { motion } from "framer-motion";

import { BallGrid } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <BallGrid items={technologies} />

      <div className='mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div className='bg-tertiary rounded-[20px] p-5 h-full'>
              <h3 className='text-white font-bold text-[18px]'>
                {category.title}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 rounded-full bg-black-200 text-secondary text-[14px]'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
