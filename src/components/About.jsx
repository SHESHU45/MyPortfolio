import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, profileLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const quickProfiles = [
  {
    name: "GitHub",
    handle: "@SHESHU45",
    url: profileLinks.github,
    badge: "GH",
    accent: "from-[#915EFF] to-[#5b21b6]",
  },
  {
    name: "LinkedIn",
    handle: "in/talluri-sheshu",
    url: profileLinks.linkedin,
    badge: "IN",
    accent: "from-[#0A66C2] to-[#0284c7]",
  },
  {
    name: "LeetCode",
    handle: "Knight · 1923",
    url: profileLinks.leetcode,
    badge: "LC",
    accent: "from-[#f59e0b] to-[#d97706]",
  },
  {
    name: "Codeforces",
    handle: "Expert · 1669",
    url: profileLinks.codeforces,
    badge: "CF",
    accent: "from-[#38bdf8] to-[#2563eb]",
  },
  {
    name: "CodeChef",
    handle: "4★ · 1840",
    url: profileLinks.codechef,
    badge: "CC",
    accent: "from-[#10b981] to-[#059669]",
  },
];

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left column: Introduction + Overview */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a Computer Science graduate from IIIT Lucknow with hands-on
            experience engineering production backend systems across e-commerce,
            high-frequency trading (HFT), and fintech at{" "}
            <span className="text-white font-medium">Coupang</span>,{" "}
            <span className="text-white font-medium">QiCAP.Ai</span>, and{" "}
            <span className="text-white font-medium">Groww</span>. From building
            secure PII data pipelines and Spring Boot/Spring Batch microservices
            on Kubernetes to low-latency trading infrastructure, I specialize in
            distributed systems, fault-tolerant architecture, and scalable
            backend engineering. Alongside system design, I'm an{" "}
            <span className="text-white font-medium">
              Expert on Codeforces (1669)
            </span>
            ,{" "}
            <span className="text-white font-medium">
              Knight on LeetCode (1923)
            </span>
            , and{" "}
            <span className="text-white font-medium">
              4★ on CodeChef (1840)
            </span>
            .
          </motion.p>
        </div>

        {/* Right column: Profile links & Downloadable Resume */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="w-full lg:w-[390px] shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">
                  Connect &amp; Profiles
                </p>
                <h3 className="text-white font-bold text-[20px] mt-0.5">
                  Profiles &amp; Resume
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#915EFF]/20 text-[#c4b5fd] border border-[#915EFF]/40">
                IIITL &apos;26
              </span>
            </div>

            {/* Download / View Resume Buttons */}
            <div className="flex gap-3 mb-5">
              <a
                href={profileLinks.resume}
                download="Talluri_Sheshu_Resume.pdf"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#915EFF] hover:bg-[#7c4dff] transition-colors text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-md shadow-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href={profileLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-black-200 hover:bg-black-100 border border-white/10 transition-colors text-secondary hover:text-white font-medium text-[14px] flex items-center justify-center gap-1.5"
              >
                View PDF ↗
              </a>
            </div>

            {/* Profile Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {quickProfiles.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-black-200/90 hover:bg-black-100 border border-white/5 hover:border-[#915EFF]/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.accent} flex items-center justify-center text-white font-bold text-[12px] shadow-sm`}
                    >
                      {item.badge}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[14px] leading-tight group-hover:text-[#c4b5fd] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-secondary text-[12px] leading-tight mt-0.5">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <span className="text-secondary group-hover:text-white group-hover:translate-x-0.5 transition-all text-[14px] pr-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
