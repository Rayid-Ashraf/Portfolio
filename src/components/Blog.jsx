import React from "react";

export default function Blog() {
  const cards = [
    {
      img: "firebase",
      title: "A guide to firestore",
      desc: "Firestore is a database service that allows you to store and manage data in the cloud. It is a NoSQL database, which means that ............",
      link: "https://rayid.hashnode.dev/beginners-guide-to-firebase",
    },
  ];
  return (
    <div className="text-center mt-28 rounded-3xl ">
      <h2 data-aos={"fade-up"}>Blog ✍🏻️</h2>
      <div className="flex flex-col items-center mt-10 gap-7 lg:gap-10 sm:text-left lg:text-center lg:flex-row lg:justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col max-w-xs gap-5 p-4 bg-white drop-shadow-xl rounded-2xl sm:flex-row sm:max-w-xl lg:max-w-sm lg:flex-col"
            data-aos={"fade-up"}
          >
            <div className="sm:w-full">
              <img
                className="rounded-xl sm:h-full sm:w-full lg:w-full min-w-[240px]"
                src={`./assets/${card.img}.png`}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="mb-2">{card.title}</h3>
              <p className="mb-4">{card.desc}</p>
              <div className="flex justify-center sm:justify-start lg:justify-center">
                <a href={card.link} target="_blank">
                  <button className="btn">Read more</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
