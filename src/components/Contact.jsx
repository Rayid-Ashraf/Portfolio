import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between gap-10 py-8 text-center mt-28 lg:text-left lg:flex-row">
      <div className="flex justify-center lg:items-center">
        <h1 className="leading-relaxed tracking-wide " data-aos={"fade-up"}>
          Intrested in <br /> working <br /> with me 🤝🏻{" "}
        </h1>
      </div>
      <div className="flex flex-col lg:w-6/12 lg:flex-row">
        <div
          className="w-3/4 h-[2px] lg:h-full lg:w-[3px] bg-[#D9D9D9] mx-auto lg:mr-12 lg:py-10 mb-10 "
          data-aos={"fade-up"}
        ></div>

        <div className="flex flex-col justify-center-center lg:w-full lg:py-6 ">
          <h2 data-aos={"fade-up"}>Contact me ☎️</h2>
          <form
            className="flex flex-col gap-6 mt-8 lg:w-full"
            action="https://formsubmit.co/rayidashrafdar@gmail.com"
            method="POST"
          >
            <div className="floating-label" data-aos={"fade-up"}>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder=" "
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="floating-label" data-aos={"fade-up"}>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="mt-6 floating-label" data-aos={"fade-up"}>
              <textarea
                className="overflow-y-hidden input "
                type="text"
                id="message"
                name="message"
                rows={1}
                placeholder=" "
                required
              />
              <label htmlFor="message" className="!items-start">
                Message
              </label>
            </div>
            <div data-aos={"fade-up"}>
              <button
                className="px-5 py-1 mt-4 text-2xl font-medium tracking-wide text-white transition-all duration-300 rounded bg-blue sm:w-fit hover:scale-110"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
