import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
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
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Science graduate from IIIT Lucknow with hands-on
        experience engineering production backend systems across e-commerce,
        high-frequency trading (HFT), and fintech at{" "}
        <span className="text-white font-medium">Coupang</span>,{" "}
        <span className="text-white font-medium">QiCAP.Ai</span>, and{" "}
        <span className="text-white font-medium">Groww</span>. From building
        secure PII data pipelines and Spring Boot/Spring Batch microservices on
        Kubernetes to low-latency trading infrastructure, I specialize in
        distributed systems, fault-tolerant architecture, and scalable backend
        engineering. Alongside system design, I'm an{" "}
        <span className="text-white font-medium">Expert on Codeforces (1669)</span>,{" "}
        <span className="text-white font-medium">Knight on LeetCode (1923)</span>,
        and{" "}
        <span className="text-white font-medium">4★ on CodeChef (1840)</span>.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
