import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profileLinks } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'info' | 'error', text: string }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profileLinks.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        text: "Please fill in your name, email, and message before sending.",
      });
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      openMailtoFallback();
      setStatus({
        type: "info",
        text: `Opened your email client to message ${profileLinks.email} directly.`,
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Talluri Sheshu",
          from_email: form.email,
          to_email: profileLinks.email,
          message: form.message,
        },
        publicKey
      );

      setLoading(false);
      setStatus({
        type: "success",
        text: "Thank you! Your message has been sent. I will get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.warn("EmailJS failed, falling back to direct email client:", error);
      setLoading(false);
      openMailtoFallback();
      setStatus({
        type: "info",
        text: `Opened your email client to message ${profileLinks.email} directly (EmailJS service token expired).`,
      });
    }
  };

  return (
    <div>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-7"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#4ea8ff]/60 font-medium transition-colors"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#4ea8ff]/60 font-medium transition-colors"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={6}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#4ea8ff]/60 font-medium transition-colors"
              />
            </label>

            {status && (
              <p
                className={`text-[14px] font-medium px-4 py-3 rounded-lg ${
                  status.type === "success"
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                    : status.type === "error"
                    ? "bg-red-500/15 text-red-300 border border-red-500/30"
                    : "bg-[#4ea8ff]/15 text-[#93c5fd] border border-[#4ea8ff]/30"
                }`}
              >
                {status.text}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#58a6ff] hover:bg-[#3b82f6] transition-colors py-3.5 px-8 rounded-xl outline-none w-fit text-[#050816] font-bold text-[15px] shadow-md shadow-primary cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <a
                href={`mailto:${profileLinks.email}`}
                className="text-secondary hover:text-white text-[14px] underline underline-offset-4 transition-colors"
              >
                or email directly ↗
              </a>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Minimalist Footer bar */}
      <footer className="mt-24 pt-10 pb-6 border-t border-white/5 flex flex-col items-center text-center">
        <p className="text-secondary text-[12px] uppercase tracking-[0.35em] font-medium">
          Engineering Scalable Systems
        </p>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-[13px] font-semibold tracking-wider uppercase">
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profileLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            LeetCode
          </a>
          <a
            href={profileLinks.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            Codeforces
          </a>
          <a
            href={profileLinks.resume}
            download="Talluri_Sheshu_Resume.pdf"
            className="text-secondary hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href={`mailto:${profileLinks.email}`}
            className="text-[#58a6ff] hover:text-[#93c5fd] border-b border-[#58a6ff]/60 pb-0.5 transition-colors"
          >
            {profileLinks.email.toUpperCase()}
          </a>
        </div>

        <p className="mt-6 text-secondary/60 text-[12px]">
          © {new Date().getFullYear()} Talluri Sheshu · Built with React &amp; Three.js
        </p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
