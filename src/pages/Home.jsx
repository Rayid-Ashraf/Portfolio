import React from "react";
import { Github, Instagram, Location, Twitter } from "../Icons";
import Project from "../components/Project";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="px-6 pt-16 bg-black">
      <div className="max-w-lg m-auto">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl leading-10">
              Hi there, <br />I am
              <span className="font-bold"> Rayid Ashraf</span>
            </h1>
            <p>
              I'm a <span className="font-bold"> frontend web developer</span>{" "}
              and a <span className="font-bold"> web designer </span> who loves
              to build stuff
            </p>
            <a
              href="https://maps.app.goo.gl/Dy8eAaKoP6g8wY4N8"
              className="flex items-center gap-1"
            >
              <Location />
              <span>Kashmir</span>
            </a>
            <div className="flex gap-1">
              <a
                href="https://twitter.com/Rayid_ashraf"
                target="_blank"
                className="w-8 cursor-pointer flex justify-center items-center h-8 rounded bg-[#111111]"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/rayid_ashraf/"
                target="_blank"
                className="w-8 cursor-pointer flex justify-center items-center h-8 rounded bg-[#111111]"
              >
                <Instagram />
              </a>
              <a
                href="https://github.com/Rayid-Ashraf"
                target="_blank"
                className="w-8 cursor-pointer flex justify-center items-center h-8 rounded bg-[#111111]"
              >
                <Github />
              </a>
            </div>
          </div>
          <div>
            <div
              className="rounded-lg w-full h-72 sm:w-44 sm:h-44  bg-[#111111] bg-cover bg-center"
              style={{ backgroundImage: "url('./assets/tobi.jpg')" }}
            ></div>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-3xl font-bold">About me</h1>
          <p className="mt-2">
            My name is Rayid Ashraf, and I am a 17-year-old high school student.
            I started my coding journey in 2021 with a passion for solving
            real-world problems — and, of course, making money. So far, I have
            built multiple projects and generated an income of approximately
            $200.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Tech Stack</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="skill">
              <span>HTML</span>
            </div>
            <div className="skill">
              <span>CSS</span>
            </div>
            <div className="skill">
              <span>Javascript</span>
            </div>
            <div className="skill">
              <span>React JS</span>
            </div>
            <div className="skill">
              <span>Next JS</span>
            </div>
            <div className="skill">
              <span>Tailwind</span>
            </div>
            <div className="skill">
              <span>Firebase</span>
            </div>
            <div className="skill">
              <span>Supabase</span>
            </div>
            <div className="skill">
              <span>Figma</span>
            </div>
            <div className="skill">
              <span>Python</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="flex flex-col gap-3 mt-4">
            <Project
              name={"Color Picker"}
              desc={"Tool for extracting colors from images"}
              url={"https://imgcolorpicker.vercel.app/"}
            />
            <Project
              name={"Noise Tools"}
              desc={"Tool to add noise texture to your images"}
              url={"https://imgcolorpicker.vercel.app/"}
            />
            <Project
              name={"Design Shots"}
              desc={"Browser Extension to collect Design Inspirations"}
              url={"https://www.designshots.co/"}
            />
            <Project
              name={"Updo"}
              desc={"Tool to access your files from anywhere"}
              url={"https://updo.netlify.app/"}
            />
            <Project
              name={"Findtool"}
              desc={"Find right tools for your every job"}
              url={"https://findtool.vercel.app/"}
            />

            <Project
              name={"Hyuga AI"}
              desc={"Generate images from text with the help of AI"}
              url={"https://hyugaai.netlify.app/"}
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Blogs</h1>
          <div className="mt-4">
            <Blog
              title={"Built my first side project"}
              date={"19 Feb 2024"}
              url={
                "https://-ray.notion.site/Built-my-first-Side-Project-be522d6d43f24b628254a426ef80781d?pvs=4"
              }
            />
            <Blog
              title={"A Beginner’s Guide to Firestore"}
              date={"15 May 2023"}
              url={
                "https://-ray.notion.site/A-Beginner-s-Guide-to-Firestore-54b289a5c7eb462591dadc2d36d769b9?pvs=4"
              }
            />
          </div>
        </div>
        <div>
          <div className="mt-12 ">
            <hr className="w-3/4 m-auto opacity-30" />
            <p className="py-4 text-center">THANKS FOR VISITING</p>
          </div>
        </div>
      </div>
    </div>
  );
}
