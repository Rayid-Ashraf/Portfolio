import React from "react";

export default function Hero() {
  const socialIcons = [
    { icon: "github", link: "https://github.com/Rayid-Ashraf" },
    { icon: "twitter", link: "https://twitter.com/Rayid_ashraf" },
    { icon: "instagram", link: "https://www.instagram.com/rayid_ashraf/" },
  ];
  const icons = [
    ["html", "css", "js"],
    ["react", "tailwind", "firebase"],
  ];
  return (
    <div className="lg:h-screen lg:flex lg:flex-col lg:justify-center sm:p-6 md:p-8 lg:py-0 lg:px-12 xl:px-22">
      <div className="flex flex-col justify-center gap-8 mt-8 text-center lg:flex-row-reverse lg:items-center lg:text-left lg:gap-20">
        <div className="m-auto" data-aos="fade-up">
          <div className="h-72 w-72 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] rounded-full image hover:cursor-not-allowed"></div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 data-aos="fade-up">
            Front-end Web <br /> Developer 🚀
          </h1>
          <p data-aos="fade-up">
            Hi there 👋🏻 ! I'm Rayid Ashraf. A front-end web developer based in
            📍Kashmir. I turn ideas into beautiful cool web-apps{" "}
          </p>
          <div
            className="flex items-center justify-center gap-6 lg:justify-start"
            data-aos="fade-up"
          >
            {socialIcons.map((icon, index) => (
              <a href={icon.link} target="_blank">
                <img
                  src={`./assets/${icon.icon}-logo.svg`}
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  key={index}
                  alt={icon.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-16 text-center lg:flex-row lg:gap-4">
        <h4 data-aos="fade-up">Tech Stack</h4>
        <div
          className="w-20 h-[3px] bg-gray-200 m-auto rounded-full lg:hidden"
          data-aos="fade-up"
        ></div>
        <div
          className="w-[2px] h-10 bg-gray-200 hidden lg:block  rounded-full"
          data-aos="fade-up"
        ></div>

        <div
          className="flex flex-col items-center justify-center gap-6 mt-6 sm:flex-row sm:gap-12 md:gap-16 lg:mt-0 lg:ml-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="flex gap-6 lg:gap-3">
            {icons[0].map((icon, index) => (
              <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} />
            ))}
          </div>
          <div className="flex gap-6 lg:gap-3">
            {icons[1].map((icon, index) => (
              <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
