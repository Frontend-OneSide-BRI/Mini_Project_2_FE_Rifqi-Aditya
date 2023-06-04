import React from "react";
import Layout from "@shared/components/Layout";
import PhotoSlider from "@pages/Landing/components/PhotoSlider";
import Marquee from "./components/Marquee";
import useSharedViewModel from "@shared/ViewModel";
import { shuffleArray } from "@shared/utils/utils";

const Landing = () => {
  const { getImageData } = useSharedViewModel();

  return (
    <Layout>
      <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-5">
        <div className="mb-5">
          <h1 className="text-2xl md:text-4xl mb-2">
            A Photo
            <br />
            Gallery for
            <br />
            The People
          </h1>
          <p className="text-sm text-stone-600 md:text-base">
            Find tons of photos that suits your
            <br />
            usage from the people, for the people.
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <Marquee imgData={shuffleArray(getImageData("All"))} />
        </div>
      </header>
      <section className="my-14 md:my-24">
        <div className="mb-5">
          <h4 className="text-xl mb-2 md:text-2xl">Automotive</h4>
          <p className="text-xs text-stone-600 max-w-md md:text-sm">
            Explore, admire, and get inspired as you embark on a visual journey
            to indulge your passion for all things automotive.
          </p>
        </div>
        <PhotoSlider imgData={getImageData("Automotive")} />
      </section>
      <section>
        <div className="mb-5 max-w-md">
          <h4 className="text-xl mb-2 md:text-2xl">Sports</h4>
          <p className="text-xs text-stone-600 md:text-sm">
            Dive into a world of athleticism, adrenaline, and triumph as you
            explore captivating moments frozen in time.
          </p>
        </div>
        <PhotoSlider imgData={getImageData("Sports")} />
      </section>
    </Layout>
  );
};

export default Landing;
