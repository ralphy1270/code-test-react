import { Fragment } from "react";
import Image from "next/image";

import Bootstrap from "../assets/images/bootstrap.png";
import Firebase from "../assets/images/firebase.png";
import Express from "./assets/images/expressjs.png";
import Figma from "../assets/images/figma.png";
import MongoDB from "../assets/images/mongodb.png";
import MySQL from "../assets/images/mysql.png";
import NextJS from "../assets/images/nextjs.png";
import NodeJS from "../assets/images/nodejs.png";
import PHP from "../assets/images/php.png";
import ReactJS from "../assets/images/react-logo.png";
import Tailwind from "../assets/images/tailwind.png";
import Typescript from "../assets/images/typescript.png";

const Home = () => {
  return (
    <Fragment>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 px-7 md:px-20 pt-20 pb-56 ">
        <div className="md:col-span-12">
          <div className="text-5xl md:text-8xl text-center md:text-left font-bold space-x-2 pb-10">
            Ralph Albert Caraan Resume
          </div>
          <div className="text-2xl font-bold space-x-2 mb-5">
            <div>
              Hello! I'm a web developer specializing in MERN, NextJS, and
              Firebase, creating dynamic and reliable online solutions.
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          I work in developing a wide range of websites, from e-commerce to web
          scraping and data analytics, as well as SEO and design.
          <br />
          <br />
          My goal is to assist small and medium-sized businesses and
          organizations in enhancing their online presence, optimizing their
          processes, and expanding their operations through custom software
          solutions.
          <br />
          <br />
          Beyond coding, I have a passion for staying up-to-date with emerging
          technologies, including AI, and I'm an avid reader with a keen
          interest in entrepreneurship and startup culture.
          <div className="my-8 max-w-max px-3 text-darkest font-semibold tag-background-gradient rounded-sm">
            Technology Stack
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 px-auto lg:px-0 w-full">
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={ReactJS} alt="ReactJS" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={NextJS} alt="NextJS" />
            </div>
            <div className="bg-white rounded-md p-2 align-center flex items-center justify-center">
              <Image src={Firebase} alt="Firebase" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={MongoDB} alt="MongoDB" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={Express} alt="Express" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={NodeJS} alt="NodeJS" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={Tailwind} alt="Tailwind" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={Typescript} alt="TypeScript" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={PHP} alt="PHP" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={MySQL} alt="MySQL" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={Bootstrap} alt="BootStrap" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src={Figma} alt="Figma" />
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mb-4 max-w-max px-3 text-darkest font-semibold tag-background-gradient rounded-sm">
            Contact
          </div>
          If you need assistance or have any questions, don't hesitate to drop
          me an{" "}
          <a
            href="mailto:caraanralph@gmail.com"
            className="underline decoration-solid underline-offset-4 decoration-4"
          >
            email
          </a>
          , and I'll respond promptly.
          <div className="my-8 max-w-max px-3 text-darkest font-semibold tag-background-gradient rounded-sm">
            Want to hire me?
          </div>
          Schedule a{" "}
          <a
            href="mailto:caraanralph@gmail.com"
            className="underline decoration-solid underline-offset-4 decoration-4"
          >
            discussion
          </a>{" "}
          with me, and let's delve into your project together.
          <div className="my-8 max-w-max px-3 text-darkest font-semibold tag-background-gradient rounded-sm">
            Social Links
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <a
              href="https://www.facebook.com/profile.php?id=100014631107203"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex justify-center space-x-3">
                <p>&rarr;</p>
                <p>Facebook</p>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ralph-caraan-9aba18143/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex justify-center space-x-3">
                <p>&rarr;</p>
                <p>LinkedIn</p>
              </span>
            </a>
            <a
              href="https://github.com/ralphy1270"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex justify-center space-x-3">
                <p>&rarr;</p>
                <p>Github</p>
              </span>
            </a>
          </div>
        </div>
        <div className="md:col-span-12">
          <div className="text-center md:text-left text-5xl md:text-8xl font-bold md:space-x-2 mb-10 mt-20">
            Experience.
          </div>
          <div className="text-2xl font-bold space-x-2 md:mb-12">
            <div>
              Take a journey through my professional experience, where I've
              honed my skills and passion for web development.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start relative">
            <div className="flex items-stretch md:justify-between md:w-1/2 font-bold text-5xl text-[#6b7280] h-20 z-10">
              <div className="flex items-end w-full md:w-1/2 relative">
                <p className="hidden md:block absolute -left-10">2023</p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-1/2 px-3 py-5 text-black bg-white text-veryDarkBlue rounded-md z-10">
              <div className="flex flex-col md:flex-row md:mb-0 mb-3 justify-between items-start w-full">
                <div className="font-bold">Freelance Web Developer</div>
                <div>October 2023 - present</div>
              </div>
              <p>Self-Employed</p>
              <p>
                <span className="font-semibold">Role:</span> Driving dynamic
                projects through full-stack web development with a tech stack
                featuring ReactJS, Firebase, MongoDB, NodeJS, and front-end
                Tailwind design
              </p>
            </div>
            <div className="flex items-stretch justify-between md:w-1/2 font-bold text-5xl  text-[#6b7280] h-20 z-10 relative">
              <div className="flex items-end w-1/2 relative">
                <p className="hidden md:block absolute -left-10">2021</p>
              </div>
              <div className="w-1/2"></div>
              <div className="absolute h-full border-r-8 border-[#6b7280]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-5 h-5 bg-[#6b7280] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-ping w-full h-full rounded-full bg-[#6b7280]"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-1/2 px-3 py-5 text-black bg-white text-veryDarkBlue rounded-md z-10">
              <div className="flex flex-col md:flex-row md:mb-0 mb-3 justify-between items-start w-full">
                <div className="font-bold">Application Developer</div>
                <div>August 2021 - March 2023</div>
              </div>
              <p>Accenture | Manila</p>
              <p>
                <span className="font-semibold">Role:</span> Design, build and
                configure applications to meet business process and application
                requirements.
              </p>
            </div>
            <div className="flex items-stretch justify-between md:w-1/2 font-bold text-5xl text-[#6b7280] h-20 z-10 relative">
              <div className="flex items-end w-1/2 relative">
                <p className="hidden md:block absolute -left-10">2021</p>
              </div>
              <div className="w-1/2"></div>
              <div className="absolute h-full border-r-8 border-[#6b7280]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-5 h-5 bg-[#6b7280] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-ping w-full h-full rounded-full bg-[#6b7280]"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-1/2 px-3 py-5 text-black bg-white text-veryDarkBlue rounded-md z-10">
              <div className="flex flex-col md:flex-row md:mb-0 mb-3 justify-between items-start w-full">
                <div className="font-bold">Graduation</div>
                <div>August 2021</div>
              </div>
              <p>Laguna State Polytechnic University</p>
              <p>
                <span className="font-semibold">Course:</span> Bachelor of
                Science in Information Technology.
              </p>
            </div>
            <div className="flex items-stretch justify-between md:w-1/2 font-bold text-5xl text-[#6b7280] h-20 z-10 relative">
              <div className="flex items-end w-1/2 relative">
                <p className="hidden md:block absolute -left-10">2020</p>
              </div>
              <div className="w-1/2"></div>
              <div className="absolute h-full border-r-8 border-[#6b7280]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-5 h-5 bg-[#6b7280] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-ping w-full h-full rounded-full bg-[#6b7280]"></div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:w-1/2 px-3 py-5 text-black bg-white text-veryDarkBlue rounded-md z-10">
              <div className="flex flex-col md:flex-row md:mb-0 mb-3 justify-between items-start w-full">
                <div className="font-bold">Capstone Project & Internship</div>
                <div>October 2020 to June 2021</div>
              </div>
              <p>Municipality of Santa Cruz, Laguna</p>
              <p>
                <span className="font-semibold">Role:</span> Support in
                full-stack web programming utilizing PHP, MySQL, and frontend
                JavaScript design for a dynamic project centered around youth
                and sports development websites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
