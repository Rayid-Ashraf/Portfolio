import React from "react";

export default function Work() {
  const cards = [
    {
      img: "updo",
      title: "Updo",
      desc: "Updo is a webapp that allows you to share your files for one device to another vai internet",
      link1: "https://updo.netlify.app",
      link2: "https://github.com/Rayid-Ashraf/Updo",
    },
    {
      img: "colorcode",
      title: "Color code",
      desc: "ColorCode is a color management tool designed to simplify your workflow.",
      link1: "https://color2code.netlify.app",
      link2: "#",
    },
    {
      img: "dailyplanner",
      title: "Daily Planner",
      desc: "This webapp is for anyone who wants to schedule his/her day more efficiently  ",
      link1: "https://mydailyplanner.netlify.app",
      link2: "https://github.com/Rayid-Ashraf/Daily-Planner",
    },
  ];
  return (
    <div className="text-center mt-28 lg:mt-8 rounded-3xl ">
      <h2 data-aos={"lg:fade-up"}>Work 👨🏻‍💻</h2>
      <div className="flex flex-col items-center mt-10 gap-7 lg:gap-10 sm:text-left lg:text-center lg:flex-row lg:justify-between">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-xs gap-5 p-4 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-2xl sm:flex-row sm:max-w-xl lg:max-w-sm lg:flex-col"
            data-aos={"fade-up"}
          >
            <div className="sm:w-full ">
              <img
                className="rounded-lg border-2 border-gray-100 sm:h-full sm:w-auto lg:w-full min-w-[240px]"
                src={`./assets/${card.img}.svg`}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="mb-2">{card.title}</h3>
              <p className="mb-4">{card.desc}</p>
              <div className="flex justify-center gap-6 sm:justify-start lg:justify-evenly">
                <a href={card.link1} target="_blank">
                  <button className="btn">Visit</button>
                </a>
                <a href={card.link2} target="_blank">
                  <button className="btn">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
