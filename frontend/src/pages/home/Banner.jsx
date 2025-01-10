import React from "react";
import bannerImg from "../../assets/banner.webp"

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full ">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">Refresh your reading list with the newest literary gems—whether you're into gripping thrillers or inspiring memoirs, this week's latest releases have something for every reader.</p>
        <button className="btn-primary">Subscribe</button>
      </div>
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="banner"/>
      </div>
    </div>
  );
};

export default Banner;
