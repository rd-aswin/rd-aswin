import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import scrollTo from "./Functions";

function HeroSection() {
  return (
    <section id="hero-section">
      <div className="hero-text">
        <h1>Welcome!</h1>
        <h2>
          I'm{" "}
          <ReactTyped strings={["RD Aswin,"]} typeSpeed={150} backSpeed={100} />
          <br />a Web{" "}
          <ReactTyped
            strings={["Developer", "Designer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h2>

        <div className="hero-call-to-btns">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-callToBlue to-callToOrange rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:text-slate-900 bold hover:bg-transparent">
              <Link
                to={"/projects"}
                onClick={() => {
                  scrollTo("projects-section");
                }}
              >
                View My Work
              </Link>
            </div>
          </button>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-callToBlue to-callToOrange rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:text-slate-900 bold hover:bg-transparent">
              <Link
                to={"/contact"}
                onClick={() => {
                  scrollTo("contact-section");
                }}
              >
                Contact Me
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div className="hero-video">
        <video height="400" width="800" autoPlay loop muted>
          <source src="/videos/hero3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="scroll-down-container">
        <div className="scroll-down-arrow">
          <Link
            to={"/about"}
            onClick={() => {
              scrollTo("about-section");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.15 236.9">
              <path
                fill="tomato"
                d="M169.47,214.67l23.43,22.22L374.78,54.67c12.5-12.5,12.5-32.8,0-45.3s-32.8-12.5-45.3,0l-137.4,135.84L54.67,9.47C42.17-3.03,21.88-3.03,9.38,9.47s-12.5,32.8,0,45.3l160.1,159.9Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
