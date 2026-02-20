"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_vjl8ox5",
        "template_ex5w5pb",
        formRef.current,
        "wCzczedoi1tjeKQjz"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ================= LEFT CARD ================= */}
          <div className="relative bg-[rgba(0,0,0,0.35)] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)]">

            <h3 className="text-xl font-semibold mb-6">
              I&apos;M ALSO ON{" "}
              <span className="text-cyan-400">SOCIAL NETWORKS</span>
            </h3>

            {/* Social Icons */}
            <div className="flex gap-8 text-2xl text-gray-300 mb-8">
              {[
                { href: "https://github.com/kalepraveenraj", icon: <FaGithub /> },
                { href: "https://linkedin.com/in/kale-praveen-raj-7b2178130", icon: <FaLinkedin /> },
                { href: "https://www.youtube.com/@kalepraveenraj", icon: <FaYoutube /> },
                { href: "https://www.instagram.com/praveen_raj_kale_1729/", icon: <FaInstagram /> },
                { href: "https://www.facebook.com/praveen.raj.135388/", icon: <FaFacebook /> },
                { href: "https://twitter.com/kalepraveenraj", icon: <FaTwitter /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:text-white hover:drop-shadow-[0_8px_20px_rgba(34,211,238,0.5)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="w-full h-px bg-white/20 mb-8"></div>

            {/* Contact Info */}
            <div className="space-y-6 text-gray-300">

              <div className="flex gap-4">
                <FaHome className="mt-1 text-white" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhone className="mt-1 text-white" />
                <div>
                  <p className="font-semibold text-white">Let&apos;s Talk</p>
                  <p>+91 85000 58880</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-white" />
                <div>
                  <p className="font-semibold text-white">E-Mail</p>
                  <p>kalepraveenraj@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="relative bg-[rgba(0,0,0,0.35)] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)]">

            <h3 className="text-xl font-semibold mb-6 text-center">
              GET IN TOUCH
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              {/* Full Name */}
              <input
                type="text"
                name="from_name"
                placeholder="Full Name *"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:[box-shadow:0_0_0_2px_rgba(34,211,238,0.6),0_0_0_4px_rgba(168,85,247,0.5),0_0_0_6px_rgba(236,72,153,0.4)]"
              />

              {/* Email */}
              <input
                type="email"
                name="email_id"
                placeholder="Email *"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:[box-shadow:0_0_0_2px_rgba(34,211,238,0.6),0_0_0_4px_rgba(168,85,247,0.5),0_0_0_6px_rgba(236,72,153,0.4)]"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number *"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:[box-shadow:0_0_0_2px_rgba(34,211,238,0.6),0_0_0_4px_rgba(168,85,247,0.5),0_0_0_6px_rgba(236,72,153,0.4)]"
              />

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="Message *"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:[box-shadow:0_0_0_2px_rgba(34,211,238,0.6),0_0_0_4px_rgba(168,85,247,0.5),0_0_0_6px_rgba(236,72,153,0.4)]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(34,211,238,0.45)]"
              >
                SEND <FaPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
