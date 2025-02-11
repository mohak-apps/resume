import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc/index";
import { FaPhoneSquareAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <div className="flex w-full justify-center flex-col">
      <h3 className={styles.sectionHeadText}>let's work together</h3>
      <div className="flex flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative flex justify-center items-center p-16 h-auto border-4 w-1/2"
        >
          <div className="h-full w-full">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label className="flex flex-col pb-5">
                <span className="text-secondary font-medium mb-2">
                  your name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                  placeholder="what's your name?"
                  className="bg-primary relative bg-white/10 bg-blend-overlay bg-repeat bg-left py-4 px-6 placeholder:text-secondary/20 text-nomad outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col pb-5">
                <span className="text-secondary font-medium mb-2">
                  your email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="what's your email?"
                  className="bg-primary bg-white/10 bg-repeat bg-blend-overlay bg-left py-4 px-6 placeholder:text-secondary/20 text-nomad outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col pb-5">
                <span className="text-secondary font-medium mb-2">
                  your message
                </span>
                <textarea
                  rows={10}
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange(e)}
                  placeholder="what do you want to say?"
                  className="bg-primary bg-white/10 bg-repeat bg-blend-overlay bg-left py-4 px-6 placeholder:text-secondary/20 text-nomad outline-none border-none font-medium resize-none max-h-[200px]"
                />
              </label>
              <button className="inline-block px-8 py-3 border bg-white/10 border-white/10 backdrop-blur-[30px] text-white text-sm tracking-widest cursor-pointer hover:bg-white/20 transition-all duration-300">
                {loading ? "sending..." : "send"}
              </button>
            </form>
          </div>
        </motion.div>
        <div className="flex justify-center items-center w-1/2 ">
          <div className="flex gap-6 flex-col">
            <div className="flex flex-row">
              <FaPhoneSquareAlt fontSize={30} /> &nbsp;
              <div>+1 (306) 990-2623</div>
            </div>
            <div className="flex flex-row">
              <FaEnvelope fontSize={30} /> &nbsp;
              <a
                href="mailto:mohak.londhe@gmail.com"
                className="hover:underline"
              >
                mohak.londhe@gmail.com
              </a>
            </div>

            <div className="flex flex-row">
              <FaMapMarkerAlt fontSize={30} /> &nbsp;
              <a
                href="https://www.google.com/maps?q=Regina,+SK"
                target="_blank"
                className="hover:underline"
              >
                Regina, SK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
