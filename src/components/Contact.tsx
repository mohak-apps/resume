import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/index";
import { slideIn } from "../utils/motion";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement; // Type assertion
    console.log(name);
    console.log(value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId, //service_leeffbi
        templateId, //template_7e7hyym
        {
          from_name: form.name,
          to_name: "Mohak",
          from_email: form.email,
          to_email: "mohak.londhe@gmail.com",
          message: form.message,
        },
        publicKey //cx7faDJK8HjJglunS
      )
      .then(() => {
        setLoading(false);
        alert("Thanks for your message");
        setForm({ email: "", message: "", name: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="relative w-full h-full bg-primary ">
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
        }}
        className="flex flex-row justify-center items-center p-16 h-auto border-4"
      >
        <div className="relative h-full w-full">
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className="flex flex-col pb-5">
              <span className="text-secondary font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
                placeholder="What's your name?"
                className="bg-primary relative bg-white/10 bg-blend-overlay bg-repeat bg-left py-4 px-6 placeholder:text-secondary/20 text-inputboxes outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col pb-5">
              <span className="text-secondary font-medium mb-2">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
                placeholder="What's your email?"
                className="bg-primary bg-white/10 bg-repeat bg-blend-overlay bg-left py-4 px-6 placeholder:text-secondary/20 text-inputboxes outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col pb-5">
              <span className="text-secondary font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={10}
                name="message"
                value={form.message}
                onChange={(e) => handleChange(e)}
                placeholder="What do you want to say?"
                className="bg-primary bg-white/10 bg-repeat bg-blend-overlay bg-left py-4 px-6 placeholder:text-secondary/20 text-inputboxes outline-none border-none font-medium resize-none max-h-[200px]"
              />
            </label>
            <button className="inline-block px-8 py-3 border bg-white/10 border-white/10 backdrop-blur-[30px] text-white text-sm tracking-widest uppercase cursor-pointer hover:bg-white/20 transition-all duration-300">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>
      <div className="absolute w-32 h-32 bg-primary flex justify-center items-center transform bottom-1 right-1 text-2xl translate-x-1/2 translate-y-1/2 z-100 ">
        &bull;
      </div>
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
