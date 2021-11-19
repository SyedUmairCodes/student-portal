import React from "react";
import { Link } from "gatsby";
const Courses = () => {
  return (
    <>
      <section className="text-gray-600 border-b-2 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-green-600 title-font">
              LEARN THE LATEST SKILLS
            </h2>
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Course We Offer
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              We offer state of the art and future proof courses that will help
              become a developer for the future.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="px-8 py-6 border-l-2 border-gray-200 shadow-lg cursor-pointer xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
              <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                Artifical Intelligence
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Learn the latest skills of AI, ML and Data science to be ready
                for the future.
              </p>
              <Link
                to="#"
                className="inline-flex items-center font-semibold text-green-500 hover:font-size-lg"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="px-8 py-6 border-l-2 shadow-lg cursor-pointer xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
              <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                Cloud Native Computing
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Learn all about AWS, GraphQL and the JAMstack to be a great
                full-stack serverless developer.
              </p>
              <Link
                to="#"
                className="inline-flex items-center font-semibold text-green-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="px-8 py-6 border-l-2 border-gray-200 shadow-lg cursor-pointer xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
              <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                Blockchain
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Learn everything about Web3, Blockchain, smart contracts, ETH
                and more.
              </p>
              <Link
                to=""
                className="inline-flex items-center font-semibold text-green-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="px-8 py-6 border-l-2 border-gray-200 shadow-lg cursor-pointer xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
              <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                Internet of Things
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Build smart devices that intreact with your household appliances
                and RPi systems
              </p>
              <Link
                to=""
                className="inline-flex items-center font-semibold text-center text-green-500"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">
            Browse All Courses
          </button>
        </div>
      </section>
    </>
  );
};

export default Courses;
