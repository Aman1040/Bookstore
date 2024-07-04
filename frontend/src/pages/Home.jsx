import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import book from "../photos/book.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Home = () => {
  return (
    <div>
      <div className="    border-2 max-h-full max-w-full flex justify-center p-32 ">
        <img src={book}></img>
        <div>
          <div className="primary-font text-3xl pb-16">
            Welcome to Book Store Website
          </div>
          <div className=" tracking-widest	 ">
            <Link to="/book/details">
              <button className="primary-btn">About</button>
            </Link>
            <Link to="/book/showbook">
              <button className="primary-btn">Book Shell</button>
            </Link>
            <a href="#contact">
              <button className="primary-btn">Contact</button>
            </a>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Work with us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                I'm Amanraj Siriah, an undergraduate student and developer.
                Currently seeking new projects and teams to collaborate with.
                Passionate about creating impactful software solutions and eager
                to contribute to innovative projects.
              </p>
            </div>
            <div>
              <div className="footer-icon">
                <a href="https://www.instagram.com/" style={{ color: "gray" }}>
                  <GrInstagram id="icon-style" />
                </a>
                <a href="https://github.com/Aman1040" style={{ color: "gray" }}>
                  <ImGithub id="icon-style" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-siriah-63a3aa1b0/"
                  style={{ color: "gray" }}
                >
                  <FaLinkedinIn id="icon-style" />
                </a>
                <a
                  href="https://leetcode.com/u/amansiriah07/"
                  style={{ color: "gray" }}
                >
                  <SiLeetcode id="icon-style" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
