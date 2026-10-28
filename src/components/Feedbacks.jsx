import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements, hackathonsAndRoles } from "../constants";

const AchievementIcon = ({ type }) => {
  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-[#3b82f6]/35 group-hover:text-[#3b82f6]/70 transition-colors"
      >
        <rect x="3" y="13" width="4" height="8" rx="1" />
        <rect x="10" y="6" width="4" height="15" rx="1" />
        <rect x="17" y="9" width="4" height="12" rx="1" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-[#3b82f6]/35 group-hover:text-[#3b82f6]/70 transition-colors"
      >
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-[#3b82f6]/35 group-hover:text-[#3b82f6]/70 transition-colors"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
};

const AchievementCard = ({ index, title, highlight, description, link, icon }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="group relative flex-1 min-w-[280px] rounded-2xl bg-[#111527]/90 hover:bg-[#151b32] border border-white/10 hover:border-[#3b82f6]/50 p-7 transition-all shadow-card flex flex-col justify-between"
  >
    <div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white font-bold text-[19px] tracking-tight">
          {title}
        </h3>
        <AchievementIcon type={icon} />
      </div>

      <p className="mt-2 text-[#4ea8ff] font-extrabold text-[23px] tracking-tight">
        {highlight}
      </p>

      <p className="mt-3 text-secondary text-[14px] leading-[22px]">
        {description}
      </p>
    </div>

    <div className="mt-5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-secondary group-hover:text-[#4ea8ff] transition-colors">
      <span>View Profile</span>
      <span>↗</span>
    </div>
  </motion.a>
);

const Feedbacks = () => {
  return (
    <div>
      {/* Centered Header matching screenshot */}
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} uppercase tracking-tight`}>
          Achievements
        </h2>
        <p className="mt-2 text-[#4ea8ff] text-[13px] sm:text-[14px] uppercase tracking-[0.35em] font-semibold">
          Engineering &nbsp;·&nbsp; Open Source &nbsp;·&nbsp; Competition
        </p>
      </motion.div>

      {/* Top 3 Competitive Programming Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} index={index} {...item} />
        ))}
      </div>

      {/* Bottom Full-Width Banner Card for Hackathons, Open Source & Roles */}
      <motion.div
        variants={fadeIn("up", "spring", 0.45, 0.75)}
        className="mt-6 rounded-2xl bg-[#111527]/90 border border-white/10 p-7 sm:p-8 shadow-card"
      >
        <h3 className="text-white font-bold text-[17px] text-center tracking-wide">
          Open Source, Leadership &amp; Education
        </h3>

        <div className="my-6 h-[1px] w-full bg-white/10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {hackathonsAndRoles.map((item) => (
            <div key={item.event} className="flex flex-col">
              <span className="text-[#4ea8ff] text-[12px] font-bold uppercase tracking-wider">
                {item.event}
              </span>
              <span className="mt-1.5 text-white/90 text-[14px] font-medium">
                {item.result}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievements");
