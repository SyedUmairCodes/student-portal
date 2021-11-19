import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font border-b-2">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Getting <span className="text-green-500">Pakistan</span>
              <br class="lg:inline-block" />
              Ready For The Future
            </h1>
            <p class="mb-8 leading-relaxed">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </p>
            <div class="flex justify-center">
              <Link
                to="#"
                class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Apply now
              </Link>
              <Link
                to="#"
                class="ml-4 inline-flex text-green-700 bg-green-100 border-0 py-2 px-6 focus:outline-none hover:bg-green-200 rounded text-lg"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
              class="object-cover object-center rounded"
              src="https://i.ibb.co/KxHzmJH/hero.jpg"
              alt="hero"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
