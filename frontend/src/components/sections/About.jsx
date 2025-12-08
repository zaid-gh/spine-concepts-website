import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-[calc(100vh-200px)] flex items-center justify-center font-light bg-custom-light-beige p-10 rounded-xl">
      <div className="w-3/4 text-center">
        <p>
          At <span className="font-semibold italic">Spine Concepts&reg;</span>, our
          passion lies in creating trusted products designed to enhance mobility
          and improve lives.
        </p>
        <p>
          With a deep commitment to precision, reliability, and patient
          well-being, we collaborate with leading experts to develop reliable
          spine care solutions. Every product we create is backed by research
          and industry expertise.
        </p>
        <p>
          Our goal is simple:
          <span className="font-semibold italic">
            to provide solutions that truly make a difference.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
