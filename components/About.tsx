"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-[rgb(27,37,61)] text-white px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Profile Image */}
        <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
          <Image
            src="/profile.jpg"
            alt="Kale Praveen Raj"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl">

          <p>
            I'm a passionate Full Stack Developer with a strong background in software development and a keen interest in
            creating responsive, accessible, and high-performance applications. 
            I specialize in Java, SQL, and desktop and web application development, 
            with a strong focus on optimizing user experiences and integrating 
            modern technologies like blockchain.
          </p>

          <p>
            My goal is to build efficient, scalable software while continuously 
            exploring innovative technologies to push the boundaries of modern applications.
          </p>

        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-10 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(34,211,238,0.45)]"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}